// imports schema model from mongoose
const { Schema, model} = require("mongoose");

// Schema for the user
const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "thought",
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  // Increases friend count in User model object when friends are added by a user
  userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });
  
  // uses userschema to create model
  const User = model("user", userSchema);
  
  // Exports the model to other files
  module.exports = User;