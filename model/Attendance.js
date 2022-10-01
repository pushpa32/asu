import moment from 'moment'
import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema
    (
        {
            emp_id: { type: String, required: true },
            in_time: { type: String, required: true },
            out_time: { type: String, default: null },
            distance_in: { type: Number, required: true },
            distance_out: { type: Number, default: null },
            activity: { type: String, default: null },
            // response_status: { type: Number, default: 0 }, //0-not responded to this activity, 1- responded by admin
            date: { type: String, required: true },
            total_time: { type: String, default: null },
            timestamp: { type: String, default: (moment().format("LTS")) }
        }
    )

// attendanceSchema.set('timestamps', true); 

export const Attendance = mongoose.model("Attendance", attendanceSchema)