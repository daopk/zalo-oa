export function isURL(url: string) {
  return /^https?:\/\//.test(url)
}
