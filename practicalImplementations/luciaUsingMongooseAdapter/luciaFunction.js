// import { lucia } from "lucia";
// import { mongoose } from "@lucia-auth/adapter-mongoose"

// // see next section for schema
// const User = mongoose.model();
// const Key = mongoose.model();
// const Session = mongoose.model();

// const auth = lucia({
// 	adapter: mongoose({
// 		User,
// 		Key,
// 		Session
// 	})
// 	// ...
// });
// module.exports=auth

import { lucia } from "lucia";
import { express } from "lucia/middleware";
import { mongoose } from "@lucia-auth/adapter-mongoose";

export const auth = lucia({
	adapter:mongoose,
	middleware: express(),
	env: "DEV"
});