const joi = require('@hapi/joi');
const checkValidation = (body) => {
  const validationObject = {
    username: joi // username should be string and at least it contains 2 characters
      .string()
      .min(2)
      .max(50),
    email: joi // email should be string and valid and its tld should be .com
      .string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com'] },
      })
      .min(4)
      .max(255),
    password: joi // password must be string, at least have 6 characters contains capital letters, small letter and numbers
      .string()
      .alphanum()
      .min(6)
      .max(255)
      .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])')),
    repassword: joi.ref('password'),
  };

  const schema = joi.object(validationObject);

  return schema.validate(body);
};
module.exports = checkValidation;
