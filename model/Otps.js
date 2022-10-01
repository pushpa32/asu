import mongoose from 'mongoose'

const otpSchema = new mongoose.Schema
    (
        {
            emp_id: { type: String, required: true },
            otp: { type: String, required: true },
            phone: { type: String, required: true }
        }
    )

export const Otp = mongoose.model("Otp", otpSchema)
