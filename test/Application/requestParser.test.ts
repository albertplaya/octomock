import { RequestParser } from "../../src/Application/requestParser";
import { RequestRepositoryInMemory } from "../Mock/requestRepositoryInMemory";
describe("Request parser application service", () => {
  it("Parse empty file", (done) => {
    let repository = new RequestRepositoryInMemory();
    let requestParser = new RequestParser(
      "test/Mock/Files/EmptyDir",
      repository
    );

    requestParser.execute();
    expect(repository.total()).toBe(0);
    done();
  });

  it("Parse one request", (done) => {
    let repository = new RequestRepositoryInMemory();
    let requestParser = new RequestParser(
      "test/Mock/Files/OneFile",
      repository
    );

    requestParser.execute();
    expect(repository.total()).toBe(1);
    done();
  });

  it("Parse multiple request", (done) => {
    let repository = new RequestRepositoryInMemory();
    let requestParser = new RequestParser(
      "test/Mock/Files/MultipleFilesAndDirs",
      repository
    );

    requestParser.execute();
    expect(repository.total()).toBe(5);
    done();
  });
});
