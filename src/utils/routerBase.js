export function getRouterBasename(baseUrl) {
  const trimmedBase = baseUrl?.trim();

  if (!trimmedBase || trimmedBase === "/" || trimmedBase === "./") {
    return undefined;
  }

  return trimmedBase.replace(/\/$/, "");
}
