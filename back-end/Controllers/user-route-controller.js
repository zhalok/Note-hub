const HttpError = require("../models/http-error-model");

const get_all_users = (req, res, next) => {
  let retinfo = [];
  user.forEach((e) => {
    retinfo.push({
      name: e.name,
      contributions: e.contributions,
      total_contributions:
        e.contributions.books.length +
        e.contributions.notes.length +
        e.contributions.questions.length +
        e.contributions.projects.length,
    });
  });

  if (retinfo.length === 0) {
    throw new HttpError("No users are found", 404);
  } else {
    res.json(retinfo);
  }
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

const add_new_user = (req, res, next) => {
  user.forEach((e) => {
    if (e.name == req.body.name) {
      throw new HttpError("Name already registered", 409);
    }
    if (e.registration_no == req.body.registration_no) {
      throw new HttpError("Registration no already registered", 409);
    }
  });

  const new_user = {
    registration_no: req.body.registration_no,
    password: req.body.password,
    name: req.body.name,
    contributions: {
      books: [],
      notes: [],
      questions: [],
      projects: [],
      total_contribution: 0,
    },
  };

  if (!new_user) throw new HttpError("Invalid Information", 404);
  else {
    user.push(new_user);
    res.status(201).json("Successful");
  }
};

const update_user = (req, res, next) => {
  let validity = 0;
  user.forEach((e) => {
    if (e.registration_no == req.body.registration_no) {
      e.contributions[req.body.type].push(req.body.name);
      // e.contributions++;
      validity = 1;
    }
  });

  if (validity == 0) {
    throw new HttpError("Invalid User", 404);
  } else return;
};

const check_user_validity = (req, res, next) => {
  const registration_no = req.body.registration_no.trim();
  const password = req.body.password.trim();
  let validity;
  user.forEach((e) => {
    if (e.registration_no == registration_no && e.password == password) {
      validity = e;
    }
  });
  if (validity == 0) {
    throw new HttpError("User Not Found", 404);
  } else {
    res.status(200).json({ message: `Logged in as ${validity.name}` });
  }
};

module.exports = {
  get_all_users,
  get_user_by_id,
  get_users_by_name,
  add_new_user,
  update_user,
  check_user_validity,
};
