"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroEventBus = void 0;
// 
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class MicroEventBus {
    constructor() {
        this.eventBus = new rxjs_1.Subject();
    }
    on(key) {
        console.log(`BCST: on(${key})`);
        return this.eventBus.asObservable().pipe((0, operators_1.filter)((event) => event.key === key), (0, operators_1.map)((event) => event.data));
    }
    broadcast(key, data) {
        console.log(`BCST: broadcast: ${key} : ${data}`);
        this.eventBus.next({ key, data });
    }
}
exports.MicroEventBus = MicroEventBus;
if (window.microEventBus === undefined) {
    console.log(`BCST : window.microEventBus = undefined,
        setting window.microEventBus`);
    window.microEventBus = new MicroEventBus();
}
