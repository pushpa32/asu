import moment from 'moment'
import mongoose from 'mongoose'

const attendanceStatusSchema = new mongoose.Schema
    (
        {
            emp_id: { type: String, required: true },
            response_status: { type: Number, default: null }, //0-Present, 1- Absent
            attendance_date: { type: String, required: true },
            timestamp: { type: String, default: new Date() }
        }
    )


export const AttendanceStatus = mongoose.model("AttendanceStatus", attendanceStatusSchema)