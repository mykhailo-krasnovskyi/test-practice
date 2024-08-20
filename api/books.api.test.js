const axios = require("axios");

test("Get all book list", async () => {
  const response = await axios.get("https://demoqa.com/bookstore/v1/books", {
    validateStatus: function (status) {
      return true; // Always return true, regardless of status code
    },
  });
  console.log(response.data);
  expect(response.status).toEqual(200); // Asserting if the response code is 200
  expect(response.data.books).toHaveLength(8);
  expect(response.data.books[0].title).toBe("Git Pocket Guide");
});

test("Verify if the user is registered", async () => {
  const response = await axios.post(
    `https://bookstore.toolsqa.com/Account/v1/Authorized`,
    {
      userName: "michael-testuser",
      password: "52hPed%s",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      // validateStatus: function (status) {
      //   return true; // Always return true, regardless of status code
      // },
    }
  );
  console.log(response.data);
  expect(response.status).toEqual(200); // Asserting if the response code is 200
  expect(response.data).toBeTruthy(); // Asserting if the response code is 200
});


test("Get token", async () => {
  const response = await axios.post(
    `https://bookstore.toolsqa.com/Account/v1/GenerateToken`,
    {
      userName: "michael-testuser",
      password: "52hPed%s",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
  // expect(response.status).toEqual(200); // Asserting if the response code is 200
  // expect(response.data).toBeTruthy(); // Asserting if the response code is 200
});
