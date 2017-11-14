import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'allSort',
    templateUrl: './allSort.component.html',
    styleUrls:['../../assets/css/allSort.css']
})

export class allSortComponent implements OnInit {
    game:any=[
        {"imgUrl":"assets/image/01/1-S.jpg","imgName":"英雄联盟"},
        {"imgUrl":"assets/image/01/2-S.jpg","imgName":"地下城勇士"},
        {"imgUrl":"assets/image/01/4-S.jpg","imgName":"穿越火线"},
        {"imgUrl":"assets/image/01/6-S.jpg","imgName":"魔兽DOTA1"},
        {"imgUrl":"assets/image/01/7-S.jpg","imgName":"魔兽DOTA2"},
        {"imgUrl":"assets/image/01/2793-S.jpg","imgName":"绝地求生"},
        {"imgUrl":"assets/image/01/1749-S.jpg","imgName":"斗地主"},
        {"imgUrl":"assets/image/01/1899-S.jpg","imgName":"天谕"},
        {"imgUrl":"assets/image/01/10-S.jpg","imgName":"天龙八部"},
        {"imgUrl":"assets/image/01/15-S.jpg","imgName":"龙之谷"},
        {"imgUrl":"assets/image/01/74-S.jpg","imgName":"饥荒"},
        {"imgUrl":"assets/image/01/1663-S.jpg","imgName":"星秀"},
        {"imgUrl":"assets/image/01/2165-S.jpg","imgName":"酷玩"},
        {"imgUrl":"assets/image/01/2168-S.jpg","imgName":"颜值"},
        {"imgUrl":"assets/image/01/2598-S.jpg","imgName":"阴阳师"},
        {"imgUrl":"assets/image/01/2774-S.jpg","imgName":"天天狼人杀"},
        {"imgUrl":"assets/image/01/100042-S.jpg","imgName":"体育竞技"},
        {"imgUrl":"assets/image/01/969-S.jpg","imgName":"使命召唤"},
        {"imgUrl":"assets/image/01/1090-S.jpg","imgName":"QQ三国"},
        {"imgUrl":"assets/image/01/411-S.jpg","imgName":"经典怀旧"},
        {"imgUrl":"assets/image/01/8-S.jpg","imgName":"魔兽世界"},
        {"imgUrl":"assets/image/01/9-S.jpg","imgName":"QQ飞车"},
        {"imgUrl":"assets/image/01/55-S.jpg","imgName":"魔侠传"},
        {"imgUrl":"assets/image/01/624-S.jpg","imgName":"星际战争"},
        {"imgUrl":"assets/image/01/677-S.jpg","imgName":"征途2"},
        {"imgUrl":"assets/image/01/683-S.jpg","imgName":"彩虹岛"},
        {"imgUrl":"assets/image/01/862-S.jpg","imgName":"CS:GO"},
        {"imgUrl":"assets/image/01/900-S.jpg","imgName":"剑侠情缘三"},
        {"imgUrl":"assets/image/01/1009-S.jpg","imgName":"九阴真经"},
        {"imgUrl":"assets/image/01/2411-S.jpg","imgName":"球球大作战"},
        {"imgUrl":"assets/image/01/411-S.jpg","imgName":"经典怀旧"},
        {"imgUrl":"assets/image/01/8-S.jpg","imgName":"魔兽世界"},
        {"imgUrl":"assets/image/01/9-S.jpg","imgName":"QQ飞车"},
        {"imgUrl":"assets/image/01/55-S.jpg","imgName":"魔侠传"},
        {"imgUrl":"assets/image/01/7-S.jpg","imgName":"魔兽DOTA2"},
    ]
    constructor() { }

    ngOnInit() { }
}