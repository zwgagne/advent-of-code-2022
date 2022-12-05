import { Day } from "../day";
import fs from 'fs';

class Day4 extends Day {
  constructor() {
    super(4);
  }

  solveForPartOne(_input: string): string {
    function countOverlappingPairs(pairs: string[]): number {
      let count = 0;

      // Loop through each pair
      for (const pair of pairs) {
        // Split the pair into the two assignments
        const assignments = pair.split(',');

        // Split each assignment into its start and end values
        const [start1, end1] = assignments[0].split('-').map(Number);
        const [start2, end2] = assignments[1].split('-').map(Number);

        // Check if one assignment fully contains the other
        if ((start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1)) {
          count++;
        }
      }

      return count;
    }

    // Read in the input from a file
    const file = fs.readFileSync('inputs/day4/part1.txt', 'utf-8');

    // Parse the pairs of assignments from the input
    const pairs = file.split('\n').filter(line => line !== '');

    return countOverlappingPairs(pairs).toString();
  }

  solveForPartTwo(input: string): string {
    function countOverlappingPairs(pairs: string[]): number {
        let count = 0;
  
        // Loop through each pair
        for (const pair of pairs) {
          // Split the pair into the two assignments
          const assignments = pair.split(',');
  
          // Split each assignment into its start and end values
          const [start1, end1] = assignments[0].split('-').map(Number);
          const [start2, end2] = assignments[1].split('-').map(Number);
  
          // Check if the ranges overlap
          if ((start1 <= start2 && end1 >= start2) || (start2 <= start1 && end2 >= start1)) {
            count++;
          }
        }
  
        return count;
      }
  
      // Read in the input from a file
      const file = fs.readFileSync('inputs/day4/part1.txt', 'utf-8').split('\n').filter(line => line !== '');
  
  
      return countOverlappingPairs(file).toString();
    }
  }
  


export default new Day4;