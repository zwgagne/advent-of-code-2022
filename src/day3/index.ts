import { Day } from "../day";
import fs from 'fs';
class Day3 extends Day {

    constructor() {
        super(3);
    }

    solveForPartOne(_input: string): any {
        const commonLetter = (rucksack: string): string => {
            const compA = [...rucksack.slice(0, rucksack.length/2)];
            const compB = rucksack.slice(rucksack.length/2, rucksack.length);
        
            return compA.reduce((def, curr) => {
                if(compB.includes(curr))
                    return curr;
                return def;
            }, 'none');
        };
        
        const letterValue = (letter: string): number => {
            const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        
            if(lowercase.includes(letter))
                return letter.charCodeAt(0) - 96;
            else
                return letter.charCodeAt(0) - 38;
        };
        
        const input = fs.readFileSync('inputs/day3/part1.txt', 'utf-8').split('\n').filter(line => line.length !== 0);
        
        const answer = input.map(commonLetter)
            .filter(l => l !== 'none')
            .map(letterValue)
            .reduce((a,b) => a + b);
        
        return answer.toString();
    }

    solveForPartTwo(_input: string): string {
        type Group = string[]
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';

        const commonLetter = (group: Group): string => {
            const alphabet = [...lowercase + lowercase.toUpperCase()];

            return alphabet.filter(letter => {
                if (group[0].includes(letter) &&
                    group[1].includes(letter) &&
                    group[2].includes(letter))
                    return true;
                return false;
            })[0];
        };

        const letterValue = (letter: string): number => {
            if (lowercase.includes(letter))
                return letter.charCodeAt(0) - 96;
            else
                return letter.charCodeAt(0) - 38;
        };

        const input = fs.readFileSync('inputs/day3/part1.txt', 'utf-8').split('\n');
        const groups: Group[] = Array.from(
            new Array(Math.ceil(input.length / 3)),
            (_, i) => input.slice(i * 3, i * 3 + 3)
        ).filter(group => group.length !== 1);


        const answer = groups.map(commonLetter)
            .map(letterValue)
            .reduce((a, b) => a + b);

        return answer.toString();
    }
}

export default new Day3;


