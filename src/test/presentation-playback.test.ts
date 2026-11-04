import { describe, it, expect } from "vitest";
import { countdownDeadline, playbackSeconds } from "@/lib/presentation-playback";
import { offer, resultPhotos } from "@/config/offer";

describe("Course playback rules", () => {
  it("configures a 25-second page release delay", () => {
    expect(offer.presentation.revealAfterSeconds).toBe(25);
  });
  it("does not credit a seek or stalled playback", () => {
    expect(playbackSeconds(1, 26, .25)).toBe(0);
    expect(playbackSeconds(1, 1, 10)).toBe(0);
  });
  it("keeps an existing deadline across reload including expired deadlines", () => {
    const deadline = countdownDeadline(null, 1000, 24);
    expect(deadline).toBe(86_401_000);
    expect(countdownDeadline(String(deadline), 100_000, 24)).toBe(deadline);
    expect(countdownDeadline("1000", 5000, 24)).toBe(1000);
  });
  it("uses all nine photos in numerical filename order", () => {
    expect(resultPhotos.map((photo) => photo.src.split("/").at(-1))).toEqual(Array.from({ length: 9 }, (_, i) => `escova-resultado-${i + 1}.webp`));
  });
});