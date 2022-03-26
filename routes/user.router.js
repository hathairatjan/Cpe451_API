const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const userCtrl = new UserController();
router.get("/", userCtrl.get);
router.post("/", userCtrl.create);
router.put("/", userCtrl.update);
router.delete("/", userCtrl.delete);
module.exports = router;
