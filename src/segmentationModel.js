// Synthetic network used by the interactive background.
export const COUNT = 90;
export const points = Array.from({length: COUNT}, (_, i) => {
  const group = Math.floor(i / 30);
  const n = i % 30;
  const angle = n * 2.399963;
  const radius = 48 + Math.sqrt(n / 30) * 118;
  return {
    group,
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    z: Math.sin(n * 1.7) * 110
  };
});
export const links = [];
points.forEach((point, i) => {
  [1, 3, 7].forEach(step => {
    const j = Math.floor(i / 30) * 30 + ((i + step) % 30);
    if (j > i) links.push([i, j, false]);
  });
});
[
  [0, 30],
  [8, 65],
  [34, 60],
  [16, 47],
  [28, 79],
  [51, 81]
].forEach(([a, b]) => links.push([a, b, true]));
export function position(index, phase) {
  const p = points[index];
  const centers = [
    [-160, -145, 0],
    [145, 10, 70],
    [-60, 185, -60]
  ];
  if (phase === 0)
    return [
      p.x + centers[p.group][0],
      p.y + centers[p.group][1],
      p.z + centers[p.group][2]
    ];
  if (phase === 1)
    return [
      ((index % 10) - 4.5) * 66,
      (Math.floor(index / 10) - 4) * 57,
      Math.sin(index * 0.8) * 75
    ];
  if (phase === 2) {
    const angle = index * 2.399963,
      y = 1 - (index / (COUNT - 1)) * 2,
      r = Math.sqrt(1 - y * y);
    return [Math.cos(angle) * r * 290, y * 290, Math.sin(angle) * r * 290];
  }
  if (phase === 3) {
    const a = (index / 30) * Math.PI * 2;
    return [
      Math.cos(a) * (135 + p.group * 50),
      Math.sin(a) * (135 + p.group * 50),
      (p.group - 1) * 130
    ];
  }
  return [
    p.x * 0.7 + centers[p.group][0],
    p.y * 0.7 + centers[p.group][1],
    p.z
  ];
}

export function reachableNodes(enforced, source = 0) {
  const reached = new Set([source]);
  const pending = [source];
  while (pending.length) {
    const node = pending.shift();
    links.forEach(([from, to, crossZone]) => {
      if (enforced && crossZone) return;
      const next = from === node ? to : to === node ? from : null;
      if (next !== null && !reached.has(next)) {
        reached.add(next);
        pending.push(next);
      }
    });
  }
  return reached;
}
