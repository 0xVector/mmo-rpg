export const PIXELS_PER_UNIT = 56;

export function unitsToPixels(units: number): number {
  return units * PIXELS_PER_UNIT;
}

export function pixelsToUnits(pixels: number): number {
  return pixels / PIXELS_PER_UNIT;
}

export function rescaleDataFromUnits(data: any) {
  if (data.x) data.x = unitsToPixels(data.x);
  if (data.y) data.y = unitsToPixels(data.y);
}

export function rescaleDataFromPixels(data: any) {
  if (data.x) data.x = pixelsToUnits(data.x);
  if (data.y) data.y = pixelsToUnits(data.y);
}