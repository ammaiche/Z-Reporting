import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CalendarComponent, ChunkPipe} from './';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ChunkPipe,
        CalendarComponent
    ],
    entryComponents: [
        CalendarComponent
    ],
    providers: [],
    exports: [
        ChunkPipe,
        CalendarComponent
    ],
})
export class CalendarModule {}
