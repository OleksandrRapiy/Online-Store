import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TextPipe } from './utils/pipes/text.pipe';

@NgModule({
    declarations: [
        TextPipe
    ],
    imports: [
        HttpClientModule
    ],
    exports: [
        TextPipe
    ]
})
export class CoreModule { }
