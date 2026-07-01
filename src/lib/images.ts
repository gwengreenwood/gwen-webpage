export function brightnessPercent(value: unknown, fallback = 100): string {
  const numericValue = typeof value === "number" && Number.isFinite(value) ? value : fallback;
  const clampedValue = Math.min(160, Math.max(20, Math.round(numericValue)));

  return `${clampedValue}%`;
}
