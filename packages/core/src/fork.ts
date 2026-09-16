const blockedProviders = new Set(["opencode", "opencode-go", "zenmux"])

export function isBlockedProvider(id: string) {
  return blockedProviders.has(id)
}

export function isBlockedEndpoint(value: string | undefined) {
  if (!value) return false
  if (!URL.canParse(value)) return false
  const url = new URL(value)
  if (url.hostname === "zenmux.ai" && url.pathname.startsWith("/api/v1")) return true
  return url.hostname === "opencode.ai" && (url.pathname === "/zen" || url.pathname.startsWith("/zen/"))
}

export const blockedProviderIDs = [...blockedProviders]

export * as Fork from "./fork"
