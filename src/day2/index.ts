import { Day } from "../day";
import fs from 'fs';

class Day2 extends Day {

    constructor() {
        super(2);
    }

    solveForPartOne(input: string): string {
        const file = fs.readFileSync('inputs/day3/part1.txt', 'utf-8')
        const lines = file.split('\n');

        let score = 0;
        for (const game of lines) {
            const opponentMove = game[0] as 'A' | 'B' | 'C';
            const myMove = game[2] as 'X' | 'Y' | 'Z';

            switch (myMove) {
                case 'X':
                    score += 1; 
                    if (opponentMove === 'C') {
                        score += 6; 
                    } else if (opponentMove === 'A') {
                        score += 3 
                    }
                    break;
                case 'Y':
                    score += 2; 
                    if (opponentMove === 'A') {
                        score += 6; 
                    } else if (opponentMove === 'B') {
                        score += 3 
                    }
                    break;
                case 'Z':
                    score += 3; 
                    if (opponentMove === 'B') {
                        score += 6;
                    } else if (opponentMove === 'C') {
                        score += 3 
                    }
                    break;
            }
        }
        return score.toString();
    }

    solveForPartTwo(input: string): string {
        const file = fs.readFileSync('inputs/day2/part1.txt', 'utf-8');
        const lines = file.split('\n');
        let score = 0;
        for (const game of lines) {
            const opponentMove = game[0] as 'A' | 'B' | 'C';
            const myMove = game[2] as 'X' | 'Y' | 'Z';
            switch (myMove) {
                case 'X':
                    score += 0; 
                    switch (opponentMove) {
                        case 'A':
                            score += 3;
                            break;
                        case 'B':
                            score += 1; 
                            break;
                        case 'C':
                            score += 2; 
                            break;
                    }
                    break;
                case 'Y':
                    score += 3; 
                    switch (opponentMove) {
                        case 'A':
                            score += 1; 
                            break;
                        case 'B':
                            score += 2; 
                            break;
                        case 'C':
                            score += 3; 
                            break;
                    }
                    break;
                case 'Z':
                    score += 6; 
                    switch (opponentMove) {
                        case 'A':
                            score += 2; 
                            break;
                        case 'B':
                            score += 3; 
                            break;
                        case 'C':
                            score += 1; 
                            break;
                    }
                    break;
            }
        }
        return score.toString();
    }
}

export default new Day2;