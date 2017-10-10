import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'tesla-battery',
    templateUrl: './tesla-battery.component.html',
    styleUrls: ['./tesla-battery.component.scss']
})
export class TeslaBatteryComponent implements OnInit {
    title: string = 'Range Per Charge';
    tesla: FormGroup;

    constructor(public fb: FormBuilder){}

    ngOnInit(){
        this.tesla = this.fb.group({
            config: this.fb.group({
                speed: 55,
                template: 20,
                climate: true,
                wheels: 19
            })
        });
    }
}