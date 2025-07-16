const { isBlogInputValid } = require("../validation/inputValidation");


function BlogInputValidatoinMiddleware(req, res, next) {

    const body = req.body;

    const ValidationResult = isBlogInputValid(body);

    const {error, value } = ValidationResult;

    if(error) {
        res.status(400).json({error, message: "from next time make sure to give nice input"})
    } else {
        next();
    }

}

module.exports = BlogInputValidatoinMiddleware;