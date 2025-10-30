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

let pendingGsapRegistrationRetry
let scrollSmootherRegistrationDisabled = false
let scrollSmootherCompatibilityWarningShown = false

const SCROLL_SMOOTHER_MIN_VERSION = { major: 3, minor: 11, patch: 0 }

const parseVersion = (value) => {
  if (typeof value !== 'string') {
    return undefined
  }
  const parts = value.split('.').map((part) => {
    const parsed = Number.parseInt(part, 10)
    return Number.isNaN(parsed) ? 0 : parsed
  })
  while (parts.length < 3) {
    parts.push(0)
  }
  return { major: parts[0], minor: parts[1], patch: parts[2] }
}

const isVersionAtLeast = (candidate, minimum) => {
  if (!candidate || !minimum) return false
  if (candidate.major !== minimum.major) {
    return candidate.major > minimum.major
  }
  if (candidate.minor !== minimum.minor) {
    return candidate.minor > minimum.minor
  }
  return candidate.patch >= minimum.patch
}

const getScrollTriggerVersion = () => {
  if (!isBrowser) return undefined
  const { ScrollTrigger } = window
  if (!ScrollTrigger || typeof ScrollTrigger.version !== 'string') {
    return undefined
  }
  return parseVersion(ScrollTrigger.version)
}

const getScrollSmootherCompatibilityState = () => {
  const version = getScrollTriggerVersion()
  if (!version) return 'unknown'
  return isVersionAtLeast(version, SCROLL_SMOOTHER_MIN_VERSION) ? 'supported' : 'unsupported'
}

const warnIncompatibleScrollSmoother = () => {
  if (!isBrowser || scrollSmootherCompatibilityWarningShown) return
  const { ScrollTrigger } = window
  const detectedVersion = ScrollTrigger?.version ?? 'unknown'
  console.warn(
    `ScrollSmoother requires ScrollTrigger ${SCROLL_SMOOTHER_MIN_VERSION.major}.${SCROLL_SMOOTHER_MIN_VERSION.minor}.` +
      `${SCROLL_SMOOTHER_MIN_VERSION.patch} or newer. Detected version: ${detectedVersion}. ScrollSmoother will be skipped.`
  )
  scrollSmootherCompatibilityWarningShown = true
}

const scheduleGsapPluginRegistrationRetry = () => {
  if (!isBrowser) return
  if (pendingGsapRegistrationRetry) {
    return
  }
  pendingGsapRegistrationRetry = window.setTimeout(() => {
    pendingGsapRegistrationRetry = undefined
    ensureGsapPluginRegistration()
  }, 50)
}

const getScrollTriggerCoreState = () => {
  if (!isBrowser) return 'pending'
  const { ScrollTrigger } = window
  if (!ScrollTrigger || !ScrollTrigger.core) {
    const compatibility = getScrollSmootherCompatibilityState()
    if (compatibility === 'unsupported') {
      scrollSmootherRegistrationDisabled = true
      warnIncompatibleScrollSmoother()
      return 'incompatible'
    }
    return 'pending'
  }
  const coreReady =
    typeof ScrollTrigger.core._getVelocityProp === 'function' &&
    typeof ScrollTrigger.core._inputObserver === 'function'
  if (!coreReady) {
    const compatibility = getScrollSmootherCompatibilityState()
    if (compatibility === 'unsupported') {
      scrollSmootherRegistrationDisabled = true
      warnIncompatibleScrollSmoother()
      return 'incompatible'
    }
    return 'pending'
  }
  return 'ready'
}

const ensureGsapPluginRegistration = () => {
  if (!isBrowser) return

  const { gsap, ScrollTrigger, ScrollSmoother } = window
  if (!gsap || typeof gsap.registerPlugin !== 'function') {
    scheduleGsapPluginRegistrationRetry()
    return
  }

  const hasPlugin = (name) => {
    if (typeof gsap.getPlugin !== 'function') {
      return false
    }
    try {
      return !!gsap.getPlugin(name)
    } catch (error) {
      return false
    }
  }

  const registerIfAvailable = (plugin, name) => {
    if (!plugin || hasPlugin(name)) {
      return
    }
    try {
      gsap.registerPlugin(plugin)
    } catch (error) {
      console.error(`Failed to register GSAP plugin: ${name}`, error)
      scheduleGsapPluginRegistrationRetry()
    }
  }

  if (ScrollTrigger) {
    registerIfAvailable(ScrollTrigger, 'ScrollTrigger')
  } else {
    scheduleGsapPluginRegistrationRetry()
  }

  if (ScrollSmoother) {
    if (scrollSmootherRegistrationDisabled) {
      return
    }
    const coreState = getScrollTriggerCoreState()
    if (coreState === 'pending') {
      scheduleGsapPluginRegistrationRetry()
      return
    }
    if (coreState === 'incompatible') {
      scrollSmootherRegistrationDisabled = true
      return
    }
    registerIfAvailable(ScrollSmoother, 'ScrollSmoother')
  }
}

const scriptManifest = [
  { name: 'jquery', path: '../assets/js/vendor/jquery-3.6.0.min.js', test: () => !!(isBrowser && window.jQuery) },
  { name: 'jquery-ui', path: '../assets/js/jquery-ui.min.js', test: () => !!(isBrowser && window.jQuery && window.jQuery.ui) },
  { name: 'bootstrap', path: '../assets/js/bootstrap.min.js', test: hasWindowMember('bootstrap') },
  { name: 'gsap', path: '../assets/js/gsap.min.js', test: hasWindowMember('gsap') },
  {
    name: 'ScrollTrigger',
    path: '../assets/js/ScrollTrigger.min.js',
    test: hasGsapPlugin('ScrollTrigger'),
    onLoad: ensureGsapPluginRegistration,
  },
  {
    name: 'ScrollSmoother',
    path: '../assets/js/ScrollSmoother.min.js',
    test: hasGsapPlugin('ScrollSmoother'),
    shouldLoad: () => {
      if (scrollSmootherRegistrationDisabled) {
        return false
      }
      const compatibility = getScrollSmootherCompatibilityState()
      if (compatibility === 'unsupported') {
        scrollSmootherRegistrationDisabled = true
        warnIncompatibleScrollSmoother()
        return false
      }
      return true
    },
    onLoad: ensureGsapPluginRegistration,
  },
  { name: 'SplitText', path: '../assets/js/SplitText.min.js', test: hasGsapPlugin('SplitText') },
  { name: 'TweenMax', path: '../assets/js/twinmax.js', test: hasWindowMember('TweenMax') },
  { name: 'waypoints', path: '../assets/js/waypoints.js', test: hasWindowMember('Waypoint') },
  { name: 'counterup', path: '../assets/js/jquery.counterup.min.js', test: hasJQueryPlugin('counterUp') },
  { name: 'magnificPopup', path: '../assets/js/jquery.magnific-popup.min.js', test: hasJQueryPlugin('magnificPopup') },
  { name: 'marquee', path: '../assets/js/jquery.marquee.min.js', test: hasJQueryPlugin('marquee') },
  { name: 'slick', path: '../assets/js/slick.min.js', test: hasJQueryPlugin('slick') },
  { name: 'stickyKit', path: '../assets/js/sticky-kit.min.js', test: hasJQueryPlugin('stick_in_parent') },
  { name: 'jarallax', path: '../assets/js/jarallax.min.js', test: hasWindowMember('jarallax') },
  { name: 'wow', path: '../assets/js/wow.js', test: hasWindowMember('WOW') },
  { name: 'imagesloaded', path: '../assets/js/imagesloaded.pkgd.min.js', test: hasWindowMember('imagesLoaded') },
  { name: 'isotope', path: '../assets/js/isotope.pkgd.min.js', test: hasWindowMember('Isotope') },
  { name: 'imageRevealHover', path: '../assets/js/imageRevealHover.js', test: hasWindowMember('ImageRevealHover') },
  { name: 'main', path: '../assets/js/main.js', test: hasWindowMember('webntricksLegacyMain') },
]

const status = new Map()

const runDescriptorOnLoad = (descriptor) => {
  if (typeof descriptor.onLoad === 'function') {
    try {
      descriptor.onLoad()
    } catch (error) {
      console.error(`Legacy script onLoad handler failed for ${descriptor.name}`, error)
    }
  }
}

const loadScriptTag = (descriptor) => {
  if (!isBrowser) return Promise.resolve()

  if (typeof descriptor.shouldLoad === 'function' && !descriptor.shouldLoad()) {
    status.set(descriptor.name, 'skipped')
    const skippedPromise = Promise.resolve()
    status.set(`${descriptor.name}:promise`, skippedPromise)
    return skippedPromise
  }

  if (descriptor.test?.()) {
    status.set(descriptor.name, 'loaded')
    runDescriptorOnLoad(descriptor)
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
      runDescriptorOnLoad(descriptor)
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
