import { Day } from "../day";
import fs from 'fs';

class Day1 extends Day {

    constructor() {
        super(1);
    }

    solveForPartOne(input: string): string {
        input = fs.readFileSync('inputs/day1/part1.txt', 'utf-8')
        const inputArray = input.split('\n');

        let mostCalories = 0;
        let currentCount = 0;

        inputArray.forEach((line) => {
            if (line == '') {
                if (currentCount > mostCalories) {
                    mostCalories = currentCount;
                }
                currentCount = 0;
            } else {
                currentCount += Number(line);
            }
        });

        return mostCalories.toString();
    }

    solveForPartTwo(input: string): string {
        input = fs.readFileSync('inputs/day1/part1.txt', 'utf-8')
        const inputArray = input.split('\n');

        let currentCount = 0;
        const totals: number[] = [];

        inputArray.forEach((line) => {
            if (line == '') {
                totals.push(currentCount);
                currentCount = 0;
            } else {
                currentCount += Number(line);
            }
        });

        const total = totals
            .sort((a, b) => a - b)
            .slice(-3)
            .reduce((a, b) => a + b);

        return total.toString();
    }
}

export default new Day1;