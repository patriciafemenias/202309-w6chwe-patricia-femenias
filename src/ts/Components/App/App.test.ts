import App from "./App.js";

describe("Given an App component", () => {
  describe("When it receives a body as parent element", () => {
    test("Then it should show the logo image in the header", () => {
      const body = document.querySelector("body")!;

      const app = new App(body);
      app.render();

      const heading = document.querySelector("main")!;

      expect(heading.className).not.toBeNull();
      expect(heading.className).toBe("main-container");
    });
  });
});
