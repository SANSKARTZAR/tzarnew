import mongoose from "mongoose";

const hireusSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Hireus = mongoose.models.Hireus || mongoose.model("Hireus", hireusSchema);

export default Hireus;
