"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestParser = void 0;
const fs_1 = require("fs");
class RequestParser {
    constructor(path, requestRepository) {
        this.path = path;
        this.requestRepository = requestRepository;
    }
    execute() {
        try {
            const addFileIntoRepository = (filePath) => {
                this.requestRepository.put(JSON.parse(fs_1.readFileSync(filePath, "utf-8")));
            };
            const parseFiles = (path) => {
                fs_1.readdirSync(path).forEach((file) => {
                    const filePath = path + "/" + file;
                    if (fs_1.statSync(filePath).isDirectory()) {
                        parseFiles(filePath);
                    }
                    else {
                        addFileIntoRepository(filePath);
                    }
                });
            };
            parseFiles(this.path);
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.RequestParser = RequestParser;
//# sourceMappingURL=requestParser.js.map