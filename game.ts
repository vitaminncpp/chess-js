import { Chessboard, Tile } from './chessboard';
import { Player } from './players';
import { State } from './state';
import { Move } from './move';
import Config from './chess.config';
import { MoveType } from './games.enum';
import { IBoard, IType } from './chess.types';

export class Game {
  board: Chessboard;
  playerW: Player;
  playerB: Player;
  state: State = new State();

  constructor(board?: IBoard) {
    this.board = new Chessboard();
    this.playerW = new Player(this.board, true);
    this.playerB = new Player(this.board, false);
    this.playerW.setOpponent(this.playerB);
    this.playerB.setOpponent(this.playerW);
    this.update();
  }

  getBoard() {
    return this.board;
  }

  move(move: Move): Move {
    if (this.state.turn === move.player) {
      const ret: Move = this.board.move(move);
      this.update();
      this.state.turn = !this.state.turn;
      return ret;
    }
    move.type = MoveType.WRONG_PLAYER;
    return move;
  }

  update(): boolean {
    this.board.update();
    return true;
  }

  getMoveMapFor(x: number, y: number, color: boolean): boolean[][] {
    if (this.state.turn === color) {
      return this.board.board[x][y].piece!.getMoveMap();
    }
    return Config.empty.map((_u) => _u.map((_v) => !!_v));
  }

  loadBoard(board: IBoard) {}

  getPosition(): IBoard {
    return this.board.board.map((rank: Tile[]) =>
      rank.map((tile: Tile) =>
        tile.piece ? { color: tile.piece.getColor(), piece: tile.piece.getType() as IType } : null,
      ),
    );
  }
}
