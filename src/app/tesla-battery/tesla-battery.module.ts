import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// services
import {BatteryService} from './tesla-battery.service';

// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component'

//components
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component'

@NgModule({
    declarations: [
        // registering our container component
        TeslaBatteryComponent,
        TeslaCarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        BatteryService
    ],
    exports: [
        // exporting so our root module can access
        TeslaBatteryComponent
    ]
})

export class TeslaBatteryModule { }