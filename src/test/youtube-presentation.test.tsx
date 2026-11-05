import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { PresentationOpening } from "@/components/course/presentation-opening";

afterEach(() => { cleanup(); vi.useRealTimers(); delete window.YT; });

it("continues progress while paused and releases exactly after 25 elapsed seconds", async () => {
  vi.useFakeTimers({ toFake: ["setInterval", "clearInterval", "performance"] });
  const configuredVideo = vi.fn();
  let current = 0;
  let state = 1;
  const fakePlayer = {
    playVideo: vi.fn(), mute: vi.fn(), unMute: vi.fn(), isMuted: () => false,
    setVolume: vi.fn(), getCurrentTime: () => current, getPlayerState: () => state, destroy: vi.fn(),
  };
  window.YT = { Player: class {
    constructor(_element: HTMLElement, options: { videoId: string; events: { onReady: (event: { target: typeof fakePlayer; data: number }) => void } }) {
      configuredVideo(options.videoId);
      queueMicrotask(() => options.events.onReady({ target: fakePlayer, data: 1 }));
      return fakePlayer;
    }
  } as unknown as NonNullable<Window["YT"]>["Player"] };
  const ready = vi.fn();
  const { rerender } = render(<PresentationOpening onReady={ready} />);
  await act(async () => { await Promise.resolve(); await Promise.resolve(); });
  expect(configuredVideo).toHaveBeenCalledWith("IMUEvQPvA4U");
  await act(async () => { await vi.advanceTimersByTimeAsync(5000); });
  expect(screen.getByRole("progressbar")).toHaveAttribute("value", "20");
  expect(ready).not.toHaveBeenCalled();
  state = 2;
  await act(async () => { await vi.advanceTimersByTimeAsync(5000); });
  expect(screen.getByRole("progressbar")).toHaveAttribute("value", "40");
  expect(ready).not.toHaveBeenCalled();
  rerender(<PresentationOpening onReady={() => ready()} />);
  current += 100;
  await act(async () => { await vi.advanceTimersByTimeAsync(14900); });
  expect(ready).not.toHaveBeenCalled();
  await act(async () => { await vi.advanceTimersByTimeAsync(100); });
  expect(screen.getByRole("progressbar")).toHaveAttribute("value", "100");
  expect(ready).toHaveBeenCalledTimes(1);
  await act(async () => { await vi.advanceTimersByTimeAsync(5000); });
  expect(ready).toHaveBeenCalledTimes(1);
  expect(fakePlayer.unMute).toHaveBeenCalled();
});