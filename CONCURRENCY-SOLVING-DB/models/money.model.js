import mongoose from "mongoose";
const { Schema } = mongoose;

const moneySchema = new Schema(
  {
    userID: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);


const MoneySchema = new mongoose.model("user", moneySchema);

export default MoneySchema;
