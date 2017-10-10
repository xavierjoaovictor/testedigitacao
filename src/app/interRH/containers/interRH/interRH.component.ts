import { Component, OnInit } from '@angular/core';
import { InterRHService } from '../../interRH.service';

@Component({
    selector: 'inter-test',
    templateUrl: './interRH.component.html',
    styleUrls: ['./interRH.component.scss']
})
export class InterComponent implements OnInit {
    title: string = 'Teste de digitação';
    baseText: string;

    constructor(private service: InterRHService){}

    ngOnInit(){
        this.baseText = this.service.getBaseText();
    }
}