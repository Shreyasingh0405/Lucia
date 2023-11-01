import mongodb from "mongoose";

const session = mongodb.model(
	"Session",
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
			active_expires: {
				type: Number,
				required: true
			},
			idle_expires: {
				type: Number,
				required: true
			}
		},
		{ _id: false }
	)
);
module.exports=session