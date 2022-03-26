const { send } = require("express/lib/response");
const user = require("../models/user");
const UserModel = require("../models/user");
class UserController {
  async get(req, res, next) {
    try {
      const users = await UserModel.find({});
      return res
        .status(200)
        .send({ status: "success", total: users.length, data: users });
    } catch (e) {
      next(e);
    }
  }
  create() {}
  update() {}
  delete() {}
}
module.exports = UserController;
