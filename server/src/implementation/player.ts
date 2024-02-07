export class Player {
    public id: string;
    public name: string;
    public x: number;
    public y: number;
    public facing: "up" | "down" | "left" | "right" = "down";
    public isRunning: boolean = false;

    constructor(id: string, name: string, x: number = 0, y: number = 0) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
    }

    public move(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}