# Safe OpenCode Fork

This repository is Lars Moan's internal distribution of [OpenCode](https://github.com/anomalyco/opencode), the open source AI coding agent.

It is not the upstream OpenCode distribution and is not affiliated with the OpenCode team.

## Safety Differences

This fork blocks these provider paths:

- OpenCode Zen (`opencode`)
- OpenCode Go (`opencode-go`)
- Zenmux (`zenmux`)

It also blocks renamed providers and model overrides that point to OpenCode Zen or Zenmux endpoints. The model catalog is pinned into each release. The upstream self-update command is removed.

## Install

Install the latest release from this repository:

```bash
curl -fsSL https://raw.githubusercontent.com/larsmoan/opencode/dev/install-safe | bash
```

The installer verifies the release SHA-256 checksum and installs `opencode` to `$HOME/.local/bin` by default. Set `OPENCODE_INSTALL_DIR` to choose another destination.

Do not use `opencode upgrade`, `https://opencode.ai/install`, or the `opencode-ai` package. They install upstream OpenCode, not this fork.

Verify the installed catalog does not expose blocked providers:

```bash
opencode models | rg -i 'opencode zen|opencode go|zenmux'
```

This command must produce no output.

## Maintenance

- The [`sync upstream` workflow](https://github.com/larsmoan/opencode/actions/workflows/sync-upstream.yml) checks upstream `dev` every Monday at 07:00 UTC and opens a review PR only when changes exist.
- Review the sync PR and require `fork safety` to pass before merging it.
- Run [`release fork`](https://github.com/larsmoan/opencode/actions/workflows/release-fork.yml) after approved changes reach `dev`.

The sync workflow never merges or releases automatically.
