"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestRepositoryInMemory = void 0;
class RequestRepositoryInMemory {
    constructor() {
        this.values = [];
    }
    put(request) {
        this.values.push(request);
    }
    total() {
        return this.values.length;
    }
}
exports.RequestRepositoryInMemory = RequestRepositoryInMemory;
//# sourceMappingURL=requestRepositoryInMemory.js.map