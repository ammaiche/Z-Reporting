import { Pipe, PipeTransform } from '@angular/core';
import { Day } from '../model/day.model';

/**
 * Pipe that transforms an array to Array of Arrays of chunk size, if the array size isn't a multiple of chunk
 * a last chunk of size less than chinkSize will be appended.
 */
@Pipe({
    name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

    transform(days: Day[], chunkSize: number): Day[][] {
        const result: Day[][] = [];
        let temp: Day[] = [];
        for (const day of days) {
            temp.push(day);
            if (temp.length === chunkSize) {
                result.push(temp);
                temp = [];
            }
        }
        if (temp.length > 0) {
            result.push(temp);
        }
        return result;
    }
}
