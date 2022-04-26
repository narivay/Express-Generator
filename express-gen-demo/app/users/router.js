var express = require("express");
var router = express.Router();
const {
  index,
  getUserById,
  post_user,
  put_user,
  delete_user,
} = require("./controller");

/* GET home page. */
router.get("/users", index);
router.get("/users/:id", getUserById);
router.post("/users", post_user);
router.put("/users/:id", put_user);
router.delete("/users/:id", delete_user);

module.exports = router;
