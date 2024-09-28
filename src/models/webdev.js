import mongoose from "mongoose";

const webdevSchema = new mongoose.Schema(
    {
        websitesdevelopment: {
            type: String,
            required: true,
        },
        socialmedia: {
            type: String,
            required: true,
        },
        perfomancemarketing: {
            type: String,
            required: true,
        },
        influencermarketing: {
            type: String,
            required: true,
        },
        brandmarketing: {
            type: String,
            required: true,
        },
        searchengineoptimization: {
            type: String,
            required: true,
        },
        productshoot: {
            type: String,
            required: true,
        },
        animation: {
            type: String,
            required: true,
        },
        logodesign: {
            type: String,
            required: true,
        },
        productpackaging: {
            type: String,
            required: true,
        },
        domain: {
            type: String,
            required: true,
        },
        requirmentmsg: {
            type: String,
            required: true,
        },

        fullname: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        termscondition: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    })

const Webdev = mongoose.models.Webdev || mongoose.model('Webdev', webdevSchema)

export default Webdev;