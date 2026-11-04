// @vitest-environment node
import { describe, expect, it, vi } from "vitest";

vi.mock("@lovable.dev/vite-tanstack-config", () => ({
  defineConfig: (options: unknown) => options,
}));

import config from "../../vite.config";

describe("Cloudflare Pages deployment configuration", () => {
  it("disables the static prerender pass", () => {
    expect(config.tanstackStart.prerender.enabled).toBe(false);
  });

  it("preserves the custom server entry", () => {
    expect(config.tanstackStart.server.entry).toBe("server");
  });

  it("targets the Cloudflare Pages Worker", () => {
    expect(config.nitro.preset).toBe("cloudflare-pages");
  });

  it("keeps external build output in dist", () => {
    expect(config.nitro.output.dir).toBe("dist");
  });
});