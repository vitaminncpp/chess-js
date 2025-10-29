import type { IPosition } from "./chess.types";
import { MoveType } from "./games.enum";

export class Move {
  xSrc: IPosition = -1;
  ySrc: IPosition = -1;
  xDest: IPosition = -1;
  yDest: IPosition = -1;

  type: MoveType = MoveType.NOT_APPLICABLE;
  player: boolean = true;

  constructor(
    player: boolean,
    src?: { x: IPosition; y: IPosition },
    dest?: { x: IPosition; y: IPosition },
  ) {
    this.player = player;
    this.init();

    if (src) {
      this.xSrc = src.x;
      this.ySrc = src.y;
    }
    if (dest) {
      this.xDest = dest.x;
      this.yDest = dest.y;
    }
  }

  init() {
    this.xSrc = -1;
    this.ySrc = -1;
    this.xDest = -1;
    this.yDest = -1;
  }

  setSrc(x: IPosition, y: IPosition): boolean {
    this.xSrc = x;
    this.ySrc = y;
    return true;
  }

  setDest(x: IPosition, y: IPosition) {
    this.xDest = x;
    this.yDest = y;
    return true;
  }

  reset() {
    this.xSrc = -1;
    this.ySrc = -1;
    this.xDest = -1;
    this.yDest = -1;
    this.type = MoveType.NOT_APPLICABLE;
  }
}
