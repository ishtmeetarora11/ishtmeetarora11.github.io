import React from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import App from "./App";
jest.mock("./NetworkBackground", () => () => null);
let container;
beforeEach(() => {
  window.matchMedia = jest.fn().mockReturnValue({matches: false});
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  act(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  container.remove();
});
const render = () =>
  act(() => {
    ReactDOM.render(<App />, container);
  });
const click = selector =>
  act(() => {
    container.querySelector(selector).click();
  });
it("renders one main heading and resolves all section links", () => {
  render();
  expect(container.querySelectorAll("h1")).toHaveLength(1);
  container
    .querySelectorAll('a[href^="#"]')
    .forEach(link =>
      expect(container.querySelector(link.getAttribute("href"))).not.toBeNull()
    );
  expect(container.querySelectorAll(".project-card")).toHaveLength(3);
});
it("identifies Illumio as current without inventing a role description", () => {
  render();
  const job = container.querySelector(".current-job");
  expect(job.textContent).toContain("Illumio");
  expect(job.textContent).toContain("Sep 2026");
  expect(job.querySelector("ul")).toBeNull();
});
it("compares containment with open lateral paths and resets the simulation", () => {
  render();
  click(".breach-button");
  expect(container.querySelector(".network-status").textContent).toContain(
    "Threat contained"
  );
  click(".policy-button");
  expect(container.querySelector(".network-status").textContent).toContain(
    "Lateral paths open"
  );
  click(".breach-button");
  expect(container.querySelector(".network-status").textContent).toContain(
    "Click a node"
  );
});
it("respects reduced motion and allows animation to be paused", () => {
  window.matchMedia.mockReturnValue({matches: true});
  render();
  expect(
    container.querySelector(".portfolio").getAttribute("data-motion")
  ).toBe("false");
  click(".motion-toggle");
  expect(
    container.querySelector(".portfolio").getAttribute("data-motion")
  ).toBe("true");
  click(".motion-toggle");
  expect(
    container.querySelector(".portfolio").getAttribute("data-motion")
  ).toBe("false");
});
it("closes navigation with Escape and returns focus", () => {
  render();
  click(".menu-toggle");
  expect(
    container.querySelector(".menu-toggle").getAttribute("aria-expanded")
  ).toBe("true");
  act(() => {
    document.dispatchEvent(new KeyboardEvent("keydown", {key: "Escape"}));
  });
  expect(
    container.querySelector(".menu-toggle").getAttribute("aria-expanded")
  ).toBe("false");
  expect(document.activeElement).toBe(container.querySelector(".menu-toggle"));
});
it("reports clipboard success only after copying succeeds", async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    value: {writeText},
    configurable: true
  });
  render();
  await act(async () => {
    container.querySelector(".copy-email").click();
  });
  expect(writeText).toHaveBeenCalledWith("ishtmeet.arora@gmail.com");
  expect(container.querySelector(".copy-status").textContent).toContain(
    "Copied."
  );
});
it("provides a fallback when clipboard permission is denied", async () => {
  Object.defineProperty(navigator, "clipboard", {
    value: {writeText: jest.fn().mockRejectedValue(new Error("denied"))},
    configurable: true
  });
  render();
  await act(async () => {
    container.querySelector(".copy-email").click();
  });
  expect(container.querySelector(".copy-status").textContent).toContain(
    "Select the email"
  );
});
