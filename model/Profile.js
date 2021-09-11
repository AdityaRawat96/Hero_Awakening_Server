const mongoose = require("mongoose");

const Profile = mongoose.model("Profile", {
  name: {
    type: String,
    required: true,
  },
  desc: {
    title: {
      type: String,
      required: true,
    },
    body: [
      {
        text: {
          type: String,
        },
      },
    ],
  },
  img: {
    type: String,
  },
  audioPath: {
    type: String,
  },
  videoPath: {
    type: String,
  },
  subTitlePath: {
    type: String,
  },
});

module.exports = Profile;
