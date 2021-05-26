"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestParser_1 = require("../../src/Application/requestParser");
const requestRepositoryInMemory_1 = require("../Mock/requestRepositoryInMemory");
describe("Request parser application service", () => {
    it("Parse empty file", () => {
        let repository = new requestRepositoryInMemory_1.RequestRepositoryInMemory();
        let requestParser = new requestParser_1.RequestParser("test/Mock/Files/EmptyDir", repository);
        requestParser.execute();
        expect(repository.total()).toBe(0);
    });
    it("Parse one request", () => {
        let repository = new requestRepositoryInMemory_1.RequestRepositoryInMemory();
        let requestParser = new requestParser_1.RequestParser("test/Mock/Files/OneFile", repository);
        requestParser.execute();
        expect(repository.total()).toBe(1);
    });
    it("Parse multiple request", () => {
        let repository = new requestRepositoryInMemory_1.RequestRepositoryInMemory();
        let requestParser = new requestParser_1.RequestParser("test/Mock/Files/MultipleFilesAndDirs", repository);
        requestParser.execute();
        expect(repository.total()).toBe(5);
    });
});
//# sourceMappingURL=requestParser.test.js.map