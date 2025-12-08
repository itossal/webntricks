import { computed, h, inject, markRaw, reactive, shallowRef } from 'vue'

import { pages } from '@/views/pages.generated.js'

const RouterSymbol = Symbol('simple-router')
const RouteSymbol = Symbol('simple-route')

const viewModules = import.meta.glob('../views/*.vue', { eager: true })

const componentMap = Object.fromEntries(
  Object.entries(viewModules).map(([key, mod]) => {
    const name = key.split('/').pop().replace('.vue', '')
    return [name, markRaw(mod.default)]
  })
)

const home13Entry = pages.find((page) => page.file === 'home-13.html')

const records = []

if (home13Entry) {
  records.push(
    createRecord({
      path: '/',
      name: 'Home',
      meta: { title: home13Entry.title || 'Branding Agency' },
      component: componentMap[home13Entry.component],
    })
  )
}

for (const page of pages) {
  const component = componentMap[page.component]
  if (!component) continue
  records.push(createRecord({
    path: page.path,
    name: page.component.replace(/Page$/, ''),
    meta: { title: page.title },
    component,
  }))
}

records.push(
  createRecord({
    path: '/projects/:slug',
    name: 'ProjectDetails',
    meta: { title: 'Project Details' },
    component: componentMap.ProjectDetailsPage,
  })
)

const errorRecord = records.find((record) => record.path === '/error') || records[0]

function escapeRegex(segment) {
  return segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function createRecord(record) {
  const paramNames = []
  const pattern = record.path
    .split('/')
    .map((segment) => {
      if (segment.startsWith(':')) {
        paramNames.push(segment.slice(1))
        return '([^/]+)'
      }
      return escapeRegex(segment)
    })
    .join('/')

  const matcher = new RegExp(`^${pattern}$`)

  return {
    ...record,
    _paramNames: paramNames,
    _matcher: matcher,
  }
}

function resolve(path) {
  for (const record of records) {
    const match = record._matcher.exec(path)
    if (match) {
      const params = Object.fromEntries(
        (record._paramNames || []).map((name, index) => [name, match[index + 1]])
      )
      return { record, params }
    }
  }
  return null
}

export function createAppRouter() {
  const currentRecord = shallowRef(records[0] || errorRecord)

  const routeState = reactive({
    path: currentRecord.value?.path ?? '/',
    name: currentRecord.value?.name ?? 'Home',
    meta: currentRecord.value?.meta ?? {},
    params: {},
  })

  const currentComponent = computed(() => currentRecord.value?.component ?? null)

  const navigate = (path, { replace = false } = {}) => {
    const match = resolve(path)
    let targetRecord = match?.record
    let params = match?.params ?? {}

    if (!targetRecord) {
      targetRecord = errorRecord
      params = {}
    }

    if (!targetRecord) return

    currentRecord.value = targetRecord
    routeState.path = path
    routeState.name = targetRecord.name
    routeState.meta = targetRecord.meta || {}
    routeState.params = params

    if (typeof window !== 'undefined') {
      const url = path
      if (replace) {
        window.history.replaceState({}, '', url)
      } else {
        window.history.pushState({}, '', url)
      }
    }
  }

  const router = {
    currentRoute: routeState,
    push: (path) => navigate(path),
    replace: (path) => navigate(path, { replace: true }),
    install(app) {
      app.provide(RouterSymbol, router)
      app.provide(RouteSymbol, routeState)
      app.component('RouterView', {
        name: 'RouterView',
        setup() {
          return () => {
            const component = currentComponent.value
            return component ? h(component) : null
          }
        },
      })
      app.component('RouterLink', {
        name: 'RouterLink',
        props: {
          to: {
            type: String,
            required: true,
          },
          custom: {
            type: Boolean,
            default: false,
          },
        },
        setup(props, { slots }) {
          const navigateTo = (event) => {
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) {
              return
            }
            event.preventDefault()
            router.push(props.to)
          }

          if (props.custom) {
            return () => slots.default?.({ navigate: navigateTo, href: props.to })
          }

          return () =>
            h(
              'a',
              {
                href: props.to,
                onClick: navigateTo,
              },
              slots.default ? slots.default() : undefined
            )
        },
      })
    },
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
      navigate(window.location.pathname, { replace: true })
    })
    navigate(window.location.pathname, { replace: true })
  }

  return router
}

export function useRouter() {
  const router = inject(RouterSymbol)
  if (!router) {
    throw new Error('Router has not been installed.')
  }
  return router
}

export function useRoute() {
  const route = inject(RouteSymbol)
  if (!route) {
    throw new Error('Route state is unavailable.')
  }
  return route
}

const router = createAppRouter()

export default router
