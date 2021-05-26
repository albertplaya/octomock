"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = express_1.default();
exports.app.get("/healthcheck", (req, res) => {
    res.send("ok");
});
exports.app.get("/", (req, res) => {
    const path = require("path");
    res.send("The sedulous hyena ate the antelope!");
});
//# sourceMappingURL=app.js.map