// Imports from mongoose and reaction
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reactions");

// schema of thoughts
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Increases reaction count in Thought model object 
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// use thought schema to create model
const Thought = model("thought", thoughtSchema);

// Exports to other files
module.exports = Thought;