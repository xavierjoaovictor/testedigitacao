import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { InterRHService } from './interRH.service';

// container
import { InterComponent } from './containers/interRH/interRH.component';

@NgModule({
    declarations: [
        InterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        InterRHService
    ],
    exports: [
        InterComponent
    ]
})

export class InterRHModule { }