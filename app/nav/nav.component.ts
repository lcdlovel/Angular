import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls:['../../assets/css/nav.css']
})

export class navComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    rotate(deg:string,color:string){
        var arrow=document.getElementById("arrow");
        arrow.style.transform="rotate("+deg+")";
        arrow.style.borderTopColor=color;
    }
    borderColor($event:any,color:string){
        $event.target.style.borderColor=color;
    }

}