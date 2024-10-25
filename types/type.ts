import { SetStateAction } from 'react';
import { Dispatch } from 'react';

export interface ResultContextType {
  result: Array<{ answer: string; result: string; tries: number }>;
  setResult: Dispatch<
    SetStateAction<Array<{ answer: string; result: string; tries: number }>>
  >;
}

export interface GameOverContextType {
  gameOver: boolean;
  setGameOver: Dispatch<SetStateAction<boolean>>;
}

export interface RandomNumberContextType {
  randomNum: number[];
  setRandomNum: Dispatch<SetStateAction<number[]>>;
  getRandomNumbers: () => number[];
}
