const mdLinks = require("../index.js");

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it ("returns href and text", (done) => {
    return mdLinks("./lib/__tests__/teste1.md").then(result => {
      expect(result).toEqual(result);
      done();
    });
  });

  it ("returns erro: link não encontrado", () => {
    return mdLinks("./lib/__tests__/teste2.md").catch(e => expect(e).toEqual(e));
  });

  it ("returns erro: arquivo não encontrado", () => {
    return mdLinks("./teste3.md").catch(e => expect(e).toEqual(e));
  });
  
});