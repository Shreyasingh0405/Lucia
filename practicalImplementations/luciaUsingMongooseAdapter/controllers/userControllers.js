const userSchema = require("../models/userSchema")
module.exports.register = async (req, res) => {
    const inputData = req.body
    const result = await userSchema.create(inputData)
    if (result) {
        return res.send({ status: 1, msg: "you registered successfully", data: result })
    }
}