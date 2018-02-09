//  a-service

import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    // 标识是否是开发模式
    isDev:boolean=true;

    constructor() { }
    // 在开发模式下，才会在终端输出日志信息
    showLog(msg){
        if(this.isDev){
            console.log(msg);
        }
    }
}