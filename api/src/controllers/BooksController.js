const BaseController = require("./BaseController");

class BooksController extends BaseController {
  constructor() {
    super();
  }

  async getAllBooks() {
    return await this.axiosInstance.get("/BookStore/v1/Books");
  }

  async addBook(userId, isbn, token) {
    return await this.axiosInstance.post(
      "/BookStore/v1/Books",
      {
        userId,
        collectionOfIsbns: [
          {
            isbn,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  async removeAllUserBooks(userId, token) {
    return await this.axiosInstance.delete(
      `https://bookstore.toolsqa.com/BookStore/v1/Books?UserId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}

module.exports = new BooksController();
