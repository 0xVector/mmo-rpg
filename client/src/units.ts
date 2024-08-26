export const PIXELS_PER_UNIT = 56;

export function unitsToPixels(units: number): number {
  return units * PIXELS_PER_UNIT;
}

export function pixelsToUnits(pixels: number): number {
  return pixels / PIXELS_PER_UNIT;
}