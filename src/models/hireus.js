import mongoose from "mongoose";

const hireusSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: false,
    },
    position: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    coverLetter: {
      type: String,
      required: false,
    },
    resumeFile: {
      type: Buffer, // You can adjust this depending on how you store files (e.g., path, base64, etc.)
      required: true,
    },
    checkbox: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Hireus = mongoose.models.Hireus || mongoose.model("Hireus", hireusSchema);

export default Hireus;
