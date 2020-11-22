const expanded_form = require("./max_deale_expandedNum");

test("calclates expanded number", () => {
  expect(expanded_form(1235)).toEqual("1000 + 200 + 30 + 5");
});

test("calclates expanded number", () => {
  expect(expanded_form(54)).toEqual("50 + 4");
});

test("calclates expanded number", () => {
  expect(expanded_form(559211)).toEqual("500000 + 50000 + 9000 + 200 + 10 + 1");
});

test("calclates expanded number", () => {
  expect(expanded_form(11359)).toEqual("10000 + 1000 + 300 + 50 + 9");
});

test("calclates expanded number", () => {
  expect(expanded_form(974)).toEqual("900 + 70 + 4");
});
