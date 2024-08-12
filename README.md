# Digital Promise Icons

An icon font showcasing stunning _Huangography_ for use in Digital Promise UI development.

# Development

Install development dependencies with [pnpm](https://pnpm.io/installation).

Source icons exported from Figma are saved in [src/icons](./src/icons). The build script creates necessary `./dist` directories before "[reorient](https://github.com/bigtimebuddy/svg-reorient)ing" SVGs to fix problems with "evenodd" fill-rules and then optimizing the output with [svgo](https://github.com/svg/svgo), and lastly generating the icon font files with [fantasticon](https://github.com/tancredi/fantasticon). See the [.fantasticonrc](./.fantasticonrc) and [svg.config.mjs](./svgo.config.mjs) configuration files in this repository for further details.