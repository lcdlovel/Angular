"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var contentComponent = (function () {
    function contentComponent() {
        this.option = [
            { "imgUrl": "app/assets/image/02/chiji", "name": "绝地求生" },
            { "imgUrl": "app/assets/image/02/chiji-2", "name": "绝地求生" },
            { "imgUrl": "app/assets/image/02/chiji-3", "name": "绝地求生" },
            { "imgUrl": "app/assets/image/02/DNF", "name": "地下城勇士" },
            { "imgUrl": "app/assets/image/02/DNF-2", "name": "地下城勇士" },
            { "imgUrl": "app/assets/image/02/DNF-3", "name": "地下城勇士" },
            { "imgUrl": "app/assets/image/02/huwai", "name": "户外" },
            { "imgUrl": "app/assets/image/02/huwai-2", "name": "户外" },
            { "imgUrl": "app/assets/image/02/huwai-3", "name": "户外" },
            { "imgUrl": "app/assets/image/02/lol", "name": "英雄联盟" },
            { "imgUrl": "app/assets/image/02/lol-2", "name": "英雄联盟" },
            { "imgUrl": "app/assets/image/02/lol-3", "name": "英雄联盟" },
            { "imgUrl": "app/assets/image/02/wanzhe", "name": "王者荣耀" },
            { "imgUrl": "app/assets/image/02/wanzhe-2", "name": "王者荣耀" },
            { "imgUrl": "app/assets/image/02/wanzhe-3", "name": "王者荣耀" },
            { "imgUrl": "app/assets/image/02/meimei.jpg", "name": "星秀" },
            { "imgUrl": "app/assets/image/02/meimei-2.jpg", "name": "星秀" },
            { "imgUrl": "app/assets/image/02/meimei-3.jpg", "name": "星秀" },
        ];
    }
    contentComponent.prototype.ngOnInit = function () { };
    contentComponent = __decorate([
        core_1.Component({
            selector: 'content',
            templateUrl: './content.component.html',
            styleUrls: ['app/assets/css/content.css']
        }), 
        __metadata('design:paramtypes', [])
    ], contentComponent);
    return contentComponent;
}());
exports.contentComponent = contentComponent;
//# sourceMappingURL=content.component.js.map