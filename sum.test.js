// //const sum = require("./sum");

// describe("Test suite 1", () => {
//   test("toBe| adds 1 + 2 to equal 3", () => {
//     const sum = 1 + 2;
//     expect(sum).toBe(3);
//   });

//   test("toBe| string", () => {
//     const text = "Test string";
//     expect(text).toBe("Test string");
//   });
// });

describe("Test suite 2", () => {
  test("toHaveLength", () => {
    const text = "Test string";
    console.log("String 1");
    const array = [1, 2, 3, 4, 5];
    console.log("String 2");
    expect(text).toHaveLength(11);
    expect(array).toHaveLength(5);
  });

  test("true and false", () => {
    const boolean1 = true;
    const boolean2 = false;

    expect(boolean1).toBeTruthy();
    expect(boolean2).toBeFalsy();
  });
});

// //52hPed%s