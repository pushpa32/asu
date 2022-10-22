import mongoose, { Schema } from 'mongoose'

const verifyActivity = new mongoose.Schema
    (
        {
            emp_id: { type: Schema.Types.ObjectId, ref: 'Employee' },
            // attendance_id: { type: Schema.Types.ObjectId, ref: 'Attendance' },
            admin_id: { type: String, required: true },
            attendance_date: { type: String, required: true },
            message: { type: String, required: true },
            // agree_disagree_status: { type: Number, default: 0 }, //0->none, 1->agree, 2->disagree
            emp_response: { type: String, default: null },
            status: { type: Number, required: true, default: 0 }, //Not confirmed
            final_verify_status: { type: Number, default: 0 }, //Not confirmed, 1- confirmed (final present-absent)
            date: { type: String, required: true }
        }
    )

export const VerifyActivity = mongoose.model("VerifyActivity", verifyActivity)