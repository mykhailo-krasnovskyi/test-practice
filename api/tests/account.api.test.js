const AccountController = require("../src/controllers/AccountController");
const userList = require("../src/testData/users");
const { faker } = require("@faker-js/faker");

test("Verify if existing user is registered", async () => {
  const response = await AccountController.isUserRegistered(
    userList.mainUser.userName,
    userList.mainUser.password
  );
  expect(response.status).toEqual(200); // Asserting if the response code is 200
  expect(response.data).toBeTruthy(); // Asserting if the response code is 200
});

test("Verify if non-existing user is not registered", async () => {
  const response = await AccountController.isUserRegistered(
    faker.internet.userName(),
    faker.internet.password({ length: 8 })
  );
  expect(response.status).toEqual(404); 
});
