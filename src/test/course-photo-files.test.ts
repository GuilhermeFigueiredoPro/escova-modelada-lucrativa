import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { instructorPhoto, resultPhotos } from "@/config/offer";

describe("Self-contained course photos", () => {
  const expectedPaths = [
    ...Array.from({ length: 9 }, (_, i) => `/assets/escova-resultado-${i + 1}.webp`),
    "/assets/marcio-cardozo.webp",
  ];

  it("uses the ten public paths in the original order", () => {
    expect([...resultPhotos, instructorPhoto].map((photo) => photo.src)).toEqual(expectedPaths);
  });

  it.each(expectedPaths)("includes an actual WebP file for %s", (src) => {
    const bytes = readFileSync(resolve("public", src.slice(1)));
    expect(bytes.subarray(0, 4).toString()).toBe("RIFF");
    expect(bytes.subarray(8, 12).toString()).toBe("WEBP");
    expect(bytes.length).toBeGreaterThan(1000);
  });
});