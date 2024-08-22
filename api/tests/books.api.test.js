const axios = require("axios");
const BooksController = require("../src/controllers/BooksController");
const AccountController = require("../src/controllers/AccountController");
const bookList = require("../src/testData/books");
const userList = require("../src/testData/users");
// 07a44798-a8ae-4eeb-9581-79c87b467a4f
// 9781593275846
test("Get all book list", async () => {
  const response = await BooksController.getAllBooks();
  expect(response.status).toEqual(200);
  expect(response.data.books).toHaveLength(8);
  expect(response.data.books[0].title).toBe(bookList[0].title);
});


// test("Verify if the user is registered", async () => {
//   const response = await axiosInstance.post(
//     `/Account/v1/Authorized`,
//     {
//       userName: "michael-testuser",
//       password: "52hPed%s",
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       validateStatus: function (status) {
//         return true; // Always return true, regardless of status code
//       },
//     }
//   );
//   console.log(response.data);
//   expect(response.status).toEqual(200); // Asserting if the response code is 200
//   expect(response.data).toBeTruthy(); // Asserting if the response code is 200
// });

describe("Adding books block", () => {
  let token;
  beforeAll(async () => {
    token = await AccountController.getAuthToken(
      userList.mainUser.userName,
      userList.mainUser.password
    );

    const removeAllBooksResponse = await BooksController.removeAllUserBooks(
      userList.mainUser.userId,
      token
    );
    expect(removeAllBooksResponse.status).toBe(204);
  });

  afterAll(async () => {
    const removeAllBooksResponse = await BooksController.removeAllUserBooks(
      userList.mainUser.userId,
      token
    );
    expect(removeAllBooksResponse.status).toBe(204);
  });

  test("Add a book to user 1", async () => {
    const response = await BooksController.addBook(
      userList.mainUser.userId,
      bookList[0].isbn,
      token
    );
    console.log(response.data);
    expect(response.status).toBe(201);
  });

  test("Add a book to user 2", async () => {
    const response = await BooksController.addBook(
      userList.mainUser.userId,
      bookList[1].isbn,
      token
    );
    console.log(response.data);
    expect(response.status).toBe(201);
  });

  test("Add a book to user 3", async () => {
    const response = await BooksController.addBook(
      userList.mainUser.userId,
      bookList[2].isbn,
      token
    );
    console.log(response.data);
    expect(response.status).toBe(201);
  });

  test("Add a book to user 4", async () => {
    const response = await BooksController.addBook(
      userList.mainUser.userId,
      bookList[3].isbn,
      token
    );
    console.log(response.data);
    expect(response.status).toBe(201);
  });

  test("Add a book to user 5", async () => {
    const response = await BooksController.addBook(
      userList.mainUser.userId,
      bookList[4].isbn,
      token
    );
    console.log(response.data);
    expect(response.status).toBe(201);
  });

  test("Add a book to user 6", async () => {
    const response = await BooksController.addBook(
      userList.mainUser.userId,
      bookList[5].isbn,
      token
    );
    console.log(response.data);
    expect(response.status).toBe(201);
  });
});
