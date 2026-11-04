export function playbackSeconds(previous: number, current: number, elapsed: number) {
  const delta = current - previous;
  if (delta <= 0 || elapsed <= 0 || delta > elapsed + 0.35) return 0;
  return Math.min(delta, elapsed);
}

export function countdownDeadline(saved: string | null, now: number, hours: number) {
  const parsed = saved === null ? NaN : Number(saved);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : now + hours * 3_600_000;
}