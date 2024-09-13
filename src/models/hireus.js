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
            required: true,
        },
        websiteurl: {
            type: String,
            required: true,
        },
        industry: {
            type: String,
            required: true,
        },
        budget: {
            type: String,
            required: true,
        },
        checkbox: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    })

const Hireus = mongoose.models.Hireus || mongoose.model('Hireus', hireusSchema)

export default Hireus;