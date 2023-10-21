import Button from "./Button.js";

describe("Given a Button component", () => {
  describe("When it receives 'next'", () => {
    test("Then it should show a button with the text 'next'", () => {
      const container = document.createElement("div");
      const buttonText = "next";

      const actionOnClick = jest.fn();

      const buttonComponent = new Button(
        container,
        "",
        buttonText,
        actionOnClick,
      );
      buttonComponent.render();

      const expectedButton = container.querySelector("button");

      expect(expectedButton).not.toBeNull();
      expect(expectedButton?.textContent).toBe(buttonText);
    });
  });

  describe("When it receives an action and the user clicks on the button", () => {
    test("Then it should call the received action", () => {
      const container = document.createElement("div");

      const actionOnClick = jest.fn();

      const buttonComponent = new Button(container, "", "", actionOnClick);
      buttonComponent.render();

      const button = container.querySelector("button")!;
      button.click();

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
