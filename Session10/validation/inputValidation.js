const Joi = require("joi");

const BLogInputSchema = Joi.object({
  title: Joi.string()
    .min(5)
    .max(100)
    .required()
    .messages({
      "string.base": `"title" should be a type of 'text'`,
      "string.empty": `"title" cannot be an empty field`,
      "string.min": `"title" should have a minimum length of abcdefgh{#limit}`,
      "string.max": `"title" should have a maximum length of {#limit}`,
      "any.required": `"title" is a required field`
    }),
  
  content: Joi.string()
    .max(1000)
    .required()
    .messages({
      "string.base": `"content" should be a type of 'text'`,
      "string.empty": `"content" cannot be an empty field`,
      "string.max": `"content" should have a maximum length of {#limit}`,
      "any.required": `"content" is a required field`
    })
});

function isBlogInputValid(userInput) {
const validationresult = BLogInputSchema.validate(userInput);
    return validationresult;
}

module.exports = {isBlogInputValid, BLogInputSchema}