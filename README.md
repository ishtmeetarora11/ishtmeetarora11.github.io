# Ishtmeet Singh Arora — engineering portfolio

An Illumio-inspired, interactive portfolio built with React. A perspective-rendered network stays behind the page and changes shape continuously with scroll. Visitors can inspect nodes, pause motion, and compare a simulated breach with and without cross-zone segmentation.

All visualized workloads and connections are synthetic. Career details are sourced from the owner's LinkedIn profile; the current Illumio role intentionally has no responsibility or achievement text yet.

## Local development

```sh
npm ci
npm start
```

## Verify and deploy

```sh
CI=true npm test -- --watchAll=false --runInBand
GENERATE_SOURCEMAP=false npm run build
npm run deploy
```

GitHub Pages publishes `gh-pages` at https://ishtmeet-arora.com. The `master` branch contains the source. Preserve `public/CNAME` when deploying.

## Editing

- `src/profileData.js`: professional history, contact information, and repositories.
- `src/App.js`: page content and interactions.
- `src/NetworkBackground.js`: scroll-driven perspective rendering and node interactions.
- `src/segmentationModel.js`: synthetic graph, scene coordinates, and reachability model.
- `src/App.scss`: responsive layout and visual system.
- `public/index.html`: search and social metadata.

The animation respects reduced-motion preferences, can be paused, stops drawing while the tab is hidden, and caps drawing resolution and frame rate. Navigation, clipboard fallbacks, current-role accuracy, and segmentation reachability have automated coverage.
