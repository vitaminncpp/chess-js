import { Piece } from './pieces';
import Config from './chess.config';
import { Move } from './move';
import { IBoard } from './chess.types';

export class Chessboard {
  board: Tile[][] = [];

  constructor(board?: IBoard) {
    this.board = [];

    board?.forEach((rank, i) => {
      this.board.push([]);
      rank.forEach((_p, j) => {
        if (_p) {
          this.board[i].push(new Tile(Piece.create(_p)));
        }
      });
    });
    for (let i = 0; i < Config.SQUARE_SIZE; i++) {
      this.board.push([]);
      for (let j = 0; j < Config.SQUARE_SIZE; j++) {
        this.board[i].push(new Tile());
      }
    }
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
}

export class Tile {
  piece: Piece | null;

  constructor(piece?: Piece) {
    this.piece = null;
  }
}
