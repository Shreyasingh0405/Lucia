const mongodb = require("mongoose");

const UserSchema = new mongodb.Schema({
    _id: {
        type: mongodb.Schema.Types.ObjectId,
        //required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},

   { _id: false }
)

module.exports=mongodb.model("user",UserSchema)