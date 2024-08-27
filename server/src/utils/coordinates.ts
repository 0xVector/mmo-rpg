export function distance(x1, y1, x2, y2): number {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

export function timeTo(x1, y1, x2, y2, speed): number {
    return distance(x1, y1, x2, y2) / speed;
}

export function projectDistance(x1, y1, x2, y2, dist): { x: number, y: number } {
    const h = distance(x1, y1, x2, y2);
    if (h === 0) return { x: x1, y: y1 };

    const x = x1 + (x2 - x1) / h * dist;
    const y = y1 + (y2 - y1) / h * dist;
    return { x, y };
}