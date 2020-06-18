const postUserQuery = require("../database/queries/addUsers");

const joi = require("@hapi/joi");
const validationObject = {
  username: joi // username should be string and at least it contains 2 characters
    .string()
    .min(2)
    .max(40),
  email: joi // email should be string and valid and its tld should be .com
    .string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    })
    .min(10),
  password: joi // password must be string, at least have 6 characters contains capital letters, small letter and numbers
    .string()
    .alphanum()
    .min(6)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])")),
};

const schema = joi.object(validationObject);

exports.postUser = (req, res) => {
  const { error, value } = schema.validate(req.body);
  const { username, email, password } = value;
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    try {
      const userInfo = {
        username,
        email,
        password,
      };
      postUserQuery(userInfo);
      res.status(200).json({ message: "user  created succefully" });
    } catch (err) {
      res.status(400).json({ message: "There is no valid information" });
    }
  }
};
