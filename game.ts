import { Chessboard, Tile } from './chessboard';
import { Player } from './players';
import { State } from './state';
import { Move } from './move';
import Config from './chess.config';
import { MoveType, PLAYER } from './games.enum';
import { IBoard, IType } from './chess.types';

export class Game {
  board: Chessboard;
  playerW: Player;
  playerB: Player;
  state: State = new State();

  constructor(board?: IBoard, turn?: PLAYER) {
    this.board = new Chessboard(board || Config.INITIAL_POS);
    this.playerW = new Player(this.board, true);
    this.playerB = new Player(this.board, false);
    this.playerW.setOpponent(this.playerB);
    this.playerB.setOpponent(this.playerW);
    this.state.turn = turn
      ? turn === PLAYER.BLACK
        ? Config.COLOR.BLACK
        : Config.COLOR.WHITE
      : Config.COLOR.WHITE;
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
    return Config.BOARD.EMPTY;
  }

  getPosition(): IBoard {
    return this.board.getPosition();
  }
}
