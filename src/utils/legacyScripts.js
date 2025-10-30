const isBrowser = typeof window !== 'undefined'

const assetUrl = (relativePath) => new URL(relativePath, import.meta.url).href

const hasJQueryPlugin = (plugin) => () => {
  if (!isBrowser || !window.jQuery || !window.jQuery.fn) {
    return false
  }
  const candidate = window.jQuery.fn[plugin]
  return typeof candidate !== 'undefined'
}

const hasWindowMember = (name) => () => isBrowser && typeof window[name] !== 'undefined'

const hasGsapPlugin = (name) => () => {
  if (!isBrowser) return false
  const gsap = window.gsap
  if (gsap) {
    if (typeof gsap.getPlugin === 'function') {
      try {
        if (gsap.getPlugin(name)) {
          return true
        }
      } catch (error) {
        // gsap.getPlugin may throw if the plugin name is unknown; ignore and continue.
      }
    }
    if (typeof gsap[name] !== 'undefined') {
      return true
    }
  }
  return hasWindowMember(name)()
}

const scriptManifest = [
  { name: 'jquery', path: '../../html/assets/js/vendor/jquery-3.6.0.min.js', test: () => !!(isBrowser && window.jQuery) },
  { name: 'jquery-ui', path: '../../html/assets/js/jquery-ui.min.js', test: () => !!(isBrowser && window.jQuery && window.jQuery.ui) },
  { name: 'bootstrap', path: '../../html/assets/js/bootstrap.min.js', test: hasWindowMember('bootstrap') },
  { name: 'gsap', path: '../../html/assets/js/gsap.min.js', test: hasWindowMember('gsap') },
  { name: 'ScrollTrigger', path: '../../html/assets/js/ScrollTrigger.min.js', test: hasGsapPlugin('ScrollTrigger') },
  { name: 'ScrollSmoother', path: '../../html/assets/js/ScrollSmoother.min.js', test: hasGsapPlugin('ScrollSmoother') },
  { name: 'SplitText', path: '../../html/assets/js/SplitText.min.js', test: hasGsapPlugin('SplitText') },
  { name: 'TweenMax', path: '../../html/assets/js/twinmax.js', test: hasWindowMember('TweenMax') },
  { name: 'waypoints', path: '../../html/assets/js/waypoints.js', test: hasWindowMember('Waypoint') },
  { name: 'counterup', path: '../../html/assets/js/jquery.counterup.min.js', test: hasJQueryPlugin('counterUp') },
  { name: 'magnificPopup', path: '../../html/assets/js/jquery.magnific-popup.min.js', test: hasJQueryPlugin('magnificPopup') },
  { name: 'marquee', path: '../../html/assets/js/jquery.marquee.min.js', test: hasJQueryPlugin('marquee') },
  { name: 'slick', path: '../../html/assets/js/slick.min.js', test: hasJQueryPlugin('slick') },
  { name: 'stickyKit', path: '../../html/assets/js/sticky-kit.min.js', test: hasJQueryPlugin('stick_in_parent') },
  { name: 'jarallax', path: '../../html/assets/js/jarallax.min.js', test: hasWindowMember('jarallax') },
  { name: 'wow', path: '../../html/assets/js/wow.js', test: hasWindowMember('WOW') },
  { name: 'imagesloaded', path: '../../html/assets/js/imagesloaded.pkgd.min.js', test: hasWindowMember('imagesLoaded') },
  { name: 'isotope', path: '../../html/assets/js/isotope.pkgd.min.js', test: hasWindowMember('Isotope') },
  { name: 'imageRevealHover', path: '../../html/assets/js/imageRevealHover.js', test: hasWindowMember('ImageRevealHover') },
  { name: 'main', path: '../../html/assets/js/main.js', test: hasWindowMember('webntricksLegacyMain') },
]

const status = new Map()

const loadScriptTag = (descriptor) => {
  if (!isBrowser) return Promise.resolve()

  if (descriptor.test?.()) {
    status.set(descriptor.name, 'loaded')
    return Promise.resolve()
  }

  const currentStatus = status.get(descriptor.name)
  if (currentStatus === 'loaded') {
    return Promise.resolve()
  }
  if (currentStatus && currentStatus !== 'error') {
    return status.get(`${descriptor.name}:promise`)
  }

  const script = document.createElement('script')
  script.src = assetUrl(descriptor.path)
  script.async = false
  script.dataset.legacyScript = descriptor.name

  const promise = new Promise((resolve, reject) => {
    script.addEventListener('load', () => {
      status.set(descriptor.name, 'loaded')
      if (descriptor.name === 'main') {
        window.webntricksLegacyMain = true
      }
      resolve()
    })
    script.addEventListener('error', () => {
      status.set(descriptor.name, 'error')
      reject(new Error(`Failed to load legacy script: ${descriptor.name}`))
    })
  })

  status.set(descriptor.name, 'loading')
  status.set(`${descriptor.name}:promise`, promise)
  document.head.appendChild(script)

  return promise
}

let loadPromise
let ensuredWindowLoad = false

const triggerWindowLoadHandlers = () => {
  if (!isBrowser || ensuredWindowLoad) return
  ensuredWindowLoad = true
  if (document.readyState === 'complete') {
    window.setTimeout(() => {
      if (window.jQuery) {
        window.jQuery(window).triggerHandler('load')
      } else {
        window.dispatchEvent(new Event('load'))
      }
    }, 0)
  } else {
    window.addEventListener(
      'load',
      () => {
        if (window.jQuery) {
          window.jQuery(window).triggerHandler('load')
        }
      },
      { once: true }
    )
  }
}

export const loadLegacyScripts = () => {
  if (!isBrowser) return Promise.resolve()
  if (!loadPromise) {
    loadPromise = scriptManifest.reduce((chain, descriptor) => {
      return chain.then(() => loadScriptTag(descriptor))
    }, Promise.resolve())
    loadPromise = loadPromise
      .then(() => {
        triggerWindowLoadHandlers()
      })
      .catch((error) => {
        console.error(error)
        throw error
      })
  }
  return loadPromise
}

export const ensureLegacyScripts = () => loadLegacyScripts()

export const refreshLegacyScripts = async () => {
  await ensureLegacyScripts()
  if (!isBrowser || !window.jQuery) return

  window.requestAnimationFrame(() => {
    window.jQuery(document).trigger('legacy:refresh')
  })
}
