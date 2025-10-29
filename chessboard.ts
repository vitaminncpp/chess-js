import { Piece } from "./pieces";
import { Move } from "./move";
import { IBoard, IPosition, IType } from "./chess.types";

export class Chessboard {
  board: Tile[][] = [];

  constructor(board: IBoard) {
    this.board = [];

    board?.forEach((rank, i) => {
      this.board.push([]);
      rank.forEach((_p, j) => {
        this.board[i].push(
          new Tile(_p ? Piece.create(_p, this, i as IPosition, j as IPosition) : null),
        );
      });
    });
    this.update();
  }

  move(move: Move): Move {
    this.board[move.xDest][move.yDest].piece = this.board[move.xSrc][move.ySrc].piece!;
    this.board[move.xSrc][move.ySrc].piece = null;
    const retMove: Move = this.board[move.xDest][move.yDest].piece!.moveTo(move.xDest, move.yDest);
    retMove.setSrc(move.xSrc, move.ySrc);
    return retMove;
  }

  update(): boolean {
    this.board.forEach((rank) => {
      rank.forEach((tile) => {
        tile.piece?.update();
      });
    });
    return true;
  }

  getPosition(): IBoard {
    return this.board.map((rank: Tile[]) =>
      rank.map((tile: Tile) =>
        tile.piece ? { color: tile.piece.getColor(), piece: tile.piece.getType() } : null,
      ),
    );
  }
}

export class Tile {
  piece: Piece | null;

  constructor(piece: Piece | null) {
    this.piece = piece;
  }
}
