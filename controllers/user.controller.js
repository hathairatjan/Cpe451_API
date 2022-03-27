const { send } = require("express/lib/response");
const Joi = require("joi");
const { findByIdAndRemove } = require("../models/user");
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

  async create(req, res, net) {
    try {
      const joi_obj = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(8),
        phone: Joi.string().min(10).allow(""),
        birthdate: Joi.date().required(),
      });
      const { value, error } = joi_obj.validate(req.body);
      if (error) return res.status(400).send(error.message);

      const new_user = new UserModel(value);

      const payload = await new_user.save();
      return res.status(201).send({
        status: "success",
        message: "user had been created",
        data: payload,
      });
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const joi_obj = Joi.object({
        id: Joi.string().required(),
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(8),
        phone: Joi.string().min(10).allow(""),
        birthdate: Joi.date().required(),
      });
      const { value, error } = joi_obj.validate(req.body);
      if (error) return res.status(400).send(error.message);

      const user = await UserModel.findByIdAndUpdate(value.id, value, {
        new: true,
      });
      return res.status(200).send({
        status: "success",
        message: "user had been updeted",
        data: user,
      });
    } catch (e) {
      next(e);
    }
  }
  async delete(req, res, next) {
    try {
      const user = await UserModel.findByIdAndRemove(req.params.id);
      return res.status(200).send({
        status: "success",
        message: "user had been deleted",
        data: user,
      });
    } catch (e) {
      next(e);
    }
  }
}
module.exports = UserController;
