export abstract class Entity {
    abstract update(): void;
    abstract render(ctx: CanvasRenderingContext2D): void;
}