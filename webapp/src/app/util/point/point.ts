export class Point{

  x : number;
  y : number;

  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  hashCode():string{

    return '' + this.x + '' + this.y;
  }
}
