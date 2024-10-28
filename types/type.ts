import { SetStateAction } from 'react';
import { Dispatch } from 'react';

export type ResultType = {
  answer: string;
  result: string;
  tries: number;
};

export interface ResultContextType {
  result: Array<ResultType> | [];
  setResult: React.Dispatch<React.SetStateAction<ResultType[]>>;
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
