// Imports express
const router = require("express").Router();

// Imports functions written in thoughtController.js file
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Route to url: http://localhost:3001/api/thoughts
router.route("/").get(getThoughts).post(createThought);

// Route to url: http://localhost:3001/api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

// Route to url: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// Route to url: http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);



// Exports to other files
module.exports = router;