// Imports express into file.
const router = require("express").Router();

// Imports functions from userController
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// Route to url: http://localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

// Route to url: http://localhost:3001/api/users/:userId
router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

// Route to url: http://localhost:3001/api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// Exports to other files
module.exports = router;