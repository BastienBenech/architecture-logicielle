export class Planete {
  private size: number = 10;

  constructor(size: number) {
    this.size = size;
  }

  public getSize(): number {
    return this.size;
  }
}