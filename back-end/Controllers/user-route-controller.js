const { Mongoose } = require("mongoose");
const HttpError = require("../models/http-error-model");
const userModel = require("../models/user-model");

const get_all_users = async (req, res, next) => {
  const users = await userModel.find({});
  if (!users) res.json("No users found");
  else res.json(users);
};

const get_user_by_id = (req, res, next) => {
  var retinfo;
  user.forEach((e) => {
    if (e.registration_no == req.params.uid) {
      retinfo = e;
    }
  });
  console.log(retinfo);
  if (!retinfo) {
    throw new HttpError("Invalid User ID", 404);
  } else {
    res.json(retinfo);
  }
};

const get_users_by_name = (req, res, next) => {
  let retinfo;
  user.forEach((e) => {
    if (e.name === req.params.name) {
      retinfo = e;
    }
  });
  if (!retinfo) {
    throw new HttpError("User Not found by name", 404);
  } else {
    res.json(retinfo);
  }
};

const add_new_user = async (req, res, next) => {
  const { name, registration_id, session, password } = req.body;

  const data = await userModel.find({});

  let vacany = true;

  data.forEach((e) => {
    if (req.body.registration_id === e.registration_id) {
      vacany = false;
    }
  });

  if (vacany) {
    const new_user = new userModel({
      name: name.trim(),
      registration_id: registration_id.trim(),
      session,
      password: password.trim(),
      books: [],
      notes: [],
      questions: [],
      projects: [],
    });

    const result = await new_user.save();
    if (!result) res.json("There was a problem");
    else res.json(result);
  } else {
    res.json("User Already Registered");
  }
};

const update_user = async (req, res, next) => {
  const registration_id = req.body.registration_id;
  let founduser;
  const data = await userModel.find({});
  data.forEach((e) => {
    if (e.registration_id == registration_id) {
      founduser = e;
      return;
    }
  });
  if (founduser) console.log(founduser);

  const { name, semester, type } = req.body;

  const new_book = {
    name,
    semester,
  };

  founduser[type].push(new_book);

  const user_id = founduser._id;

  userModel.findByIdAndUpdate(user_id, founduser, { new: true }, () => {
    console.log("Updated");
  });
};

const check_user_validity = async (req, res, next) => {
  const data = await userModel.find({});
  const { id, password } = req.body;
  let founduser;
  data.forEach((e) => {
    if (e.registration_id == id && e.password == password) {
      founduser = e;
    }
  });
  if (!founduser) res.json("User not found");
  else res.json(founduser);
};

module.exports = {
  get_all_users,
  get_user_by_id,
  get_users_by_name,
  add_new_user,
  update_user,
  check_user_validity,
};
