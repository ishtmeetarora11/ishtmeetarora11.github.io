import {
  COUNT,
  points,
  links,
  position,
  reachableNodes
} from "./segmentationModel";
it("contains an intrusion to its trust zone when cross-zone policy is enforced", () => {
  const reached = reachableNodes(true);
  expect(reached.size).toBe(30);
  reached.forEach(index => expect(points[index].group).toBe(0));
});
it("permits lateral reachability across all zones without segmentation", () => {
  expect(reachableNodes(false).size).toBe(COUNT);
});
it("uses valid endpoints and finite positions throughout the scroll scene", () => {
  links.forEach(([a, b]) => {
    expect(points[a]).toBeDefined();
    expect(points[b]).toBeDefined();
  });
  for (let phase = 0; phase < 5; phase++)
    points.forEach((_, index) =>
      position(index, phase).forEach(value =>
        expect(Number.isFinite(value)).toBe(true)
      )
    );
});
