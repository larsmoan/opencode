const blockedProviders = new Set(["opencode"])

export function isBlockedProvider(id: string) {
  return blockedProviders.has(id)
}

export function isBlockedEndpoint(value: string | undefined) {
  if (!value) return false
  if (!URL.canParse(value)) return false
  const url = new URL(value)
  return url.hostname === "opencode.ai" && (url.pathname === "/zen/v1" || url.pathname.startsWith("/zen/v1/"))
}

export const blockedProviderIDs = [...blockedProviders]

export * as Fork from "./fork"
