import { Schema, model } from "mongoose";

import moongosePaginate from "mongoose-paginate-v2";

const collection = "users";
const schema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String },
    role: { type: Number, default: 0 },
    photo: {
      type: String,
      default: "https://i.postimg.cc/wTgNFWhR/profile.png",
    },
    verified: { type: Boolean, default: false },
    verifiedCode: { type: String, required: true }
  },
  { timestamps: true }
);

schema.plugin(moongosePaginate);
const User = model(collection, schema);

export default User;
