import mongodb from "mongoose";

const Key = mongodb.model(
	"Key",
	new mongodb.Schema(
		{
			_id: {
				type: mongodb.Schema.Types.ObjectId,
				required: true
			},
			user_id: {
				type: mongodb.Schema.Types.ObjectId,
				required: true
			},
			hashed_password: String
		},
		{ _id: false }
	)
);
module.exports={Key}