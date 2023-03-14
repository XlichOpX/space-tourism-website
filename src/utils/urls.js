/**
 * @param {string} string
 * @returns The URI encoded string
 */
export function uriEncode(string) {
  return string.toLowerCase().replaceAll(" ", "-");
}
