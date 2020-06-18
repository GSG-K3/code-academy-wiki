const postUserQuery = require("../database/queries/addUsers");
const checkEmail = require("../database/queries/ckeckEmail");

const joi = require("@hapi/joi");
const validationObject = {
  username: joi // username should be string and at least it contains 2 characters
    .string()
    .min(2)
    .max(50),
  email: joi // email should be string and valid and its tld should be .com
    .string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    })
    .min(10)
    .max(255),
  password: joi // password must be string, at least have 6 characters contains capital letters, small letter and numbers
    .string()
    .alphanum()
    .min(6)
    .max(255)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])")),
  repassword: joi.ref("password"),
};

const schema = joi.object(validationObject);

exports.postUser = (req, res) => {
  const { email } = req.body;
  // check if email exists or not
  checkEmail(email)
    .then((result) => {
      // if email doesn't exist create a new User
      if (result.rows.length === 0) {
        // check if email domain is gazaskygeeks.com
        if (/@gazaskygeeks.com\s*$/.test(email)) {
          const { error, value } = schema.validate(req.body);
          // if there is an error in the validation send a message to client
          if (error) {
            res.status(400).json({ error: error.details[0].message });
          } else {
            // if there is no error in validation insert the user information in database
            try {
              const { username, email, password } = value;
              const userInfo = {
                username,
                email,
                password,
              };
              postUserQuery(userInfo);
              res.status(200).json({ message: "user  created succefully" });
            } catch (err) {
              res
                .status(400)
                .json({ message: "There is no valid information" });
            }
          }
        } else {
          res
            .status(400)
            .json({ error: "email domain must be gazaskygeeks.com" });
        }
      } else {
        res.status(400).json({ message: "email already exists!" });
      }
    })
    .catch((err) => err);
};
