export function iconAsync(route) {
  return import(`./icons${route}`);
}