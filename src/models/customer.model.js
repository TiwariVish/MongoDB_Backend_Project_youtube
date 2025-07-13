// models/customer.model.ts
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const customerSchema = new Schema(
    {
      customerId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true, unique: true, lowercase: true, trim: true },
      phoneNumber: { type: String, required: true },
      country: { type: String },
      address: { type: String },
      city: { type: String },
      postcode: { type: String },
      dialCode: { type: String },
      img: { type: String, required: false }, 
      password: { type: String, required: true },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    },
    { timestamps: true }
  );

// 🔐 Hash password before saving
customerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// 🔐 Password verification method
customerSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const Customer = mongoose.model("Customer", customerSchema);
