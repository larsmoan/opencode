# OpenCode

This is a fork of [OpenCode](https://github.com/anomalyco/opencode), the open source AI coding agent.

It follows upstream OpenCode while removing access to the automatically available models hosted through OpenCode Zen.

![OpenCode Terminal UI](packages/web/src/assets/lander/screenshot.png)

## Fork Differences

- OpenCode Zen (`opencode`) and its free models are unavailable.
- Provider aliases and model overrides cannot point to OpenCode Zen endpoints.
- OpenCode Go (`opencode-go`) and Zenmux (`zenmux`) remain available when deliberately configured.
- The model catalog is pinned into each release.
- Upstream self-updates are removed. Install and update from this repository's releases.

## Install

Install the latest release from this repository:

```bash
curl -fsSL https://raw.githubusercontent.com/larsmoan/opencode/dev/install-safe | bash
```

The installer verifies the release SHA-256 checksum and installs `opencode` to `$HOME/.local/bin` by default. Set `OPENCODE_INSTALL_DIR` to choose another destination.

Do not use `opencode upgrade`, `https://opencode.ai/install`, or the `opencode-ai` package. They install upstream OpenCode instead of this fork.

Verify the installed catalog does not expose blocked providers:

```bash
opencode models | rg -i 'opencode zen'
```

This command must produce no output.

## Maintenance

- The [`sync upstream` workflow](https://github.com/larsmoan/opencode/actions/workflows/sync-upstream.yml) checks upstream `dev` every Monday at 07:00 UTC and opens a review PR only when changes exist.
- Review the sync PR and require `fork safety` to pass before merging it.
- Run [`release fork`](https://github.com/larsmoan/opencode/actions/workflows/release-fork.yml) after approved changes reach `dev`.

The sync workflow never merges or releases automatically.

- Another test line for opencode action verification
