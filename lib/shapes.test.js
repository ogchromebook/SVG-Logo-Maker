const { Circle, Triangle, Square } = require("./shapes");

test("Circle render method should return correct SVG string", () => {
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render()).toBe(
    '<circle cx="150" cy="100" r="80" fill="blue" />'
  );
});
