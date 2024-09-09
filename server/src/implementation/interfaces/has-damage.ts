export interface IHasDamage {
    readonly DAMAGE: number;
}

export function isIHasDamage(obj: any): obj is IHasDamage {
    return obj && obj.DAMAGE !== undefined;
}