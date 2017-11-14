import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shou',
    templateUrl: './shouyou.component.html',
    styleUrls:['../../assets/css/content.css']
})
export class shouComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    option:any=[
        {"imgUrl":"assets/image/02/wanzhe","name":"王者荣耀"},
        {"imgUrl":"assets/image/02/wanzhe-2","name":"王者荣耀"},
        {"imgUrl":"assets/image/02/wanzhe-3","name":"王者荣耀"},
        {"imgUrl":"assets/image/02/meimei.jpg","name":"星秀"},
        {"imgUrl":"assets/image/02/meimei-2.jpg","name":"星秀"},
        {"imgUrl":"assets/image/02/meimei-3.jpg","name":"星秀"},
        {"imgUrl":"assets/image/02/chiji","name":"绝地求生"},
        {"imgUrl":"assets/image/02/chiji-2","name":"绝地求生"},
        {"imgUrl":"assets/image/02/chiji-3","name":"绝地求生"},
        {"imgUrl":"assets/image/02/DNF","name":"地下城勇士"},
        {"imgUrl":"assets/image/02/DNF-2","name":"地下城勇士"},
        {"imgUrl":"assets/image/02/DNF-3","name":"地下城勇士"},
        {"imgUrl":"assets/image/02/lol","name":"英雄联盟"},
        {"imgUrl":"assets/image/02/lol-2","name":"英雄联盟"},
        {"imgUrl":"assets/image/02/lol-3","name":"英雄联盟"},
        {"imgUrl":"assets/image/02/huwai","name":"户外"},
        {"imgUrl":"assets/image/02/huwai-2","name":"户外"},
        {"imgUrl":"assets/image/02/huwai-3","name":"户外"},
    ]
}