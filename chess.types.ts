export type IPosition = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type IType = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type IValue = -1 | 0 | 1 | 3 | 5 | 9 | 10000;

export interface IPiece {
  color: boolean;
  piece: IType;
  r?: IPosition;
  f?: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
}
export type IBoard = Array<Array<IPiece | null>>;
