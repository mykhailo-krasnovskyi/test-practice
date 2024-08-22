const BaseController = require("./BaseController");

class AccountController extends BaseController {
  constructor() {
    super();
  }

  async getAuthToken(userName, password) {
    const response = await this.axiosInstance.post(`Account/v1/GenerateToken`, {
      userName,
      password,
    });

    return await response.data.token;
  }

  async isUserRegistered(userName, password) {
    const response = await this.axiosInstance.post(`/Account/v1/Authorized`, {
      userName,
      password,
    });

    return response;
  }
}

module.exports = new AccountController();
