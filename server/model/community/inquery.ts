import mongoose, { Schema } from "mongoose";
import IInquery from "../../interface/community/inquery";
import autoIncrement from "mongoose-auto-increment";
import crypto from "crypto";

autoIncrement.initialize(mongoose.connection);

const InquerySchema: Schema<IInquery> = new Schema(
  {
    seq: { type: Number, required: true },
    answer: {
      content: { type: String, default: null },
      createdAt: { type: Date, maxlength: 128, default: null },
      updatedAt: { type: Date, maxlength: 128, default: null },
    },
    isAnswer: { type: Boolean, required: true, default: false },
    content: { type: String, required: true },
    user: { type: String, required: true, maxlength: 128 },
    hash_password: { type: String, required: true, maxlength: 128 },
    salt: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

InquerySchema.plugin(autoIncrement.plugin, {
  model: "Inquerys",
  field: "seq",
  startAt: 1, // start
  increment: 1, // end
});

// virtual
InquerySchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hash_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// method
InquerySchema.methods = {
  // check password
  authenticate: function (plainPassword) {
    return this.encryptPassword(plainPassword) === this.hash_password;
  },

  // hash password
  encryptPassword: function (password) {
    if (password === undefined) return "";
    try {
      return crypto
        .createHmac("sha512", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

export default mongoose.models.Inquery ||
  mongoose.model<IInquery>("Inquery", InquerySchema);
