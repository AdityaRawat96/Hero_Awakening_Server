"use strict";
const { ObjectId } = require("bson");
const express = require("express");
const Profile = require("../model/Profile");
let router = express.Router();

router.get("/getProfile", (req, res) => {
  Profile.find({}, (err, data) => {
    if (!err) {
      res.json({
        status: 200,
        data: data,
      });
    } else {
      console.log(err);
    }
  });
});

router.post("/addProfile", (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    desc: {
      title: req.body.title,
      body: req.body.body,
    },
    img: req.body.img,
  });
  let st;
  let msg;
  profile.save((err, data) => {
    if (!err) {
      st = 200;
      msg = "Profile Added Successfully.";
    } else {
      console.log(err);
      st = 500;
      msg = "System Error while Processing the request.";
    }
    res.json({
      status: st,
      message: msg,
    });
  });
});

router.delete("/deleteProfile", (req, res) => {
  let id = req.body.ObjectId;
  Profile.deleteOne({ _id: ObjectId(id) }, (err, data) => {
    if (!err) {
      res.json({ status: 200, message: "Deletion Successful." });
    } else {
      res.json({ status: 500, message: "System Error. Deletion failed" });
    }
  });
});

router.get("", (req, res) => {
  res.send("Hello World from router");
});

module.exports = router;
