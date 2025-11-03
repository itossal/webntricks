const ABSOLUTE_PATTERN = /^(?:[a-z]+:)?\/\//i

const normalizeBase = (base) => {
  if (!base) return '/'
  return base.endsWith('/') ? base : `${base}/`
}

const stripLeadingSlash = (value) => {
  if (!value) return ''
  return value.replace(/^\/+/, '')
}

export const assetUrl = (path) => {
  if (!path) return ''
  if (ABSOLUTE_PATTERN.test(path) || path.startsWith('data:')) {
    return path
  }

  const base = normalizeBase(import.meta.env?.BASE_URL ?? '/')
  const cleanPath = stripLeadingSlash(path)

  return `${base}${cleanPath}`
}
