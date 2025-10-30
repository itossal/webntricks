const marqueeInstances = new Map()

const DEFAULT_SPEED = 80
const MAX_CLONES_MULTIPLIER = 3

const toNumber = (value, fallback) => {
  const parsed = parseFloat(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

const measureWidth = (element, cache) => {
  if (!element) return 0
  if (cache.has(element)) {
    return cache.get(element)
  }
  const width = element.getBoundingClientRect().width
  cache.set(element, width)
  return width
}

const ensureClones = (marquee, container, widthCache) => {
  const baseChildren = Array.from(marquee.children)
  if (!baseChildren.length) {
    return []
  }

  const clones = []
  const containerWidth = container.getBoundingClientRect().width || container.offsetWidth || 0
  if (containerWidth === 0) {
    return clones
  }

  const maxClones = baseChildren.length * MAX_CLONES_MULTIPLIER

  const currentWidth = () =>
    Array.from(marquee.children).reduce((total, child) => total + measureWidth(child, widthCache), 0)

  let totalWidth = currentWidth()
  if (totalWidth === 0) {
    return clones
  }

  while (totalWidth < containerWidth * 2 && clones.length < maxClones) {
    for (const child of baseChildren) {
      if (totalWidth >= containerWidth * 2) {
        break
      }
      const clone = child.cloneNode(true)
      clone.dataset.marqueeClone = 'true'
      marquee.appendChild(clone)
      clones.push(clone)
      widthCache.set(clone, measureWidth(child, widthCache))
      totalWidth = currentWidth()
    }
  }

  return clones
}

const createMarqueeInstance = (marquee) => {
  const container = marquee.closest('.slider__marquee') || marquee.parentElement
  if (!container) {
    return null
  }

  const widthCache = new WeakMap()
  const clones = ensureClones(marquee, container, widthCache)

  let offset = 0
  let rafId
  let previous
  let paused = false

  const speedAttr =
    container.dataset.marqueeSpeed ?? marquee.dataset.marqueeSpeed ?? container.dataset.speed ?? marquee.dataset.speed
  const speed = Math.max(10, toNumber(speedAttr, DEFAULT_SPEED))

  const step = (timestamp) => {
    rafId = requestAnimationFrame(step)

    if (paused) {
      previous = timestamp
      return
    }

    if (previous == null) {
      previous = timestamp
    }

    const delta = timestamp - previous
    previous = timestamp

    offset -= (speed * delta) / 1000

    let firstChild = marquee.firstElementChild
    while (firstChild) {
      const width = measureWidth(firstChild, widthCache)
      if (width <= 0) {
        break
      }

      if (-offset >= width) {
        offset += width
        marquee.appendChild(firstChild)
        firstChild = marquee.firstElementChild
        continue
      }
      break
    }

    marquee.style.transform = `translateX(${offset}px)`
  }

  const onMouseEnter = () => {
    paused = true
  }

  const onMouseLeave = () => {
    paused = false
  }

  container.addEventListener('mouseenter', onMouseEnter)
  container.addEventListener('mouseleave', onMouseLeave)

  rafId = requestAnimationFrame(step)

  return {
    destroy() {
      cancelAnimationFrame(rafId)
      container.removeEventListener('mouseenter', onMouseEnter)
      container.removeEventListener('mouseleave', onMouseLeave)
      marquee.style.transform = ''
      clones.forEach((clone) => {
        if (clone.parentElement === marquee) {
          clone.remove()
        }
      })
    },
  }
}

export const initMarquees = (root = document) => {
  if (!root) return
  const elements = root.querySelectorAll('.slider__marquee .marquee_mode')
  elements.forEach((element) => {
    if (marqueeInstances.has(element)) {
      return
    }
    const instance = createMarqueeInstance(element)
    if (instance) {
      marqueeInstances.set(element, instance)
    }
  })
}

export const destroyMarquees = () => {
  for (const [element, instance] of marqueeInstances.entries()) {
    instance.destroy()
    marqueeInstances.delete(element)
  }
}

export const refreshMarquees = async (root = document) => {
  destroyMarquees()
  initMarquees(root)
}
