const {Schema,model} = require("mongoose");
const { Date , ObjectId } = Schema;
const User = require('../../global/models/user');

const timeRecordSchema = new Schema(
    {
        selectDay:{
            init: { type : Date, default: new Date().start.getTime() },
            finish:  { type : Date, default: new Date().end.getTime() },
            user: {
                type: Schema.Types.ObjectId,
                ref:'User',
                required: [true, 'The user is required']
            },
            latitude:{
                type:Number,
                required:[true,'latitude is required'],
            },
            longitude:{
                type:Number,
                required:[true,'longitude is required'],
            }
        },
        selectWeek:{
           init: { type : Date, default: new Date().start.getTime() },
           finish:  { type : Date, default: new Date().end.getTime() },
            user: {
                type: Schema.Types.ObjectId,
                ref:'User',
                required: [true, 'The user is required']
            },
            latitude:{
                type:Number,
                required:[true,'latitude is required'],
            },
            longitude:{
                type:Number,
                required:[true,'longitude is required'],
            }
        },
        selectMonth:{
            init: {  type : Date, default: new Date().start.getTime() },
            finish:  { type : Date, default: new Date().end.getTime() },
            user: {
                type: Schema.Types.ObjectId,
                ref:'User',
                required: [true, 'The state is required']
            },
            latitude:{
                type:Number,
                required:[true,'latitude is required'],
            },
            longitude:{
                type:Number,
                required:[true,'longitude is required'],
            }
        },
        pauseDay:{
            user: {
                type: Schema.Types.ObjectId,
                ref:'User',
                required: [true, 'The user is required']
            },
            reason:{
                type:Number,
                required:[true,'Reason is required'],
            },
            latitude:{
                type:Number,
                required:[true,'latitude is required'],
            },
            longitude:{
                type:Number,
                required:[true,'longitude is required'],
            }
        },
        pauseWeek:{
            user: {
                type: Schema.Types.ObjectId,
                ref:'User',
                required: [true, 'The user is required']
            },
            reason:{
                type:Number,
                required:[true,'Reason is required'],
            },
            latitude:{
                type:Number,
                required:[true,'latitude is required'],
            },
            longitude:{
                type:Number,
                required:[true,'longitude is required'],
            }
        },
        pauseMonth:{
            user: {
                type: Schema.Types.ObjectId,
                ref:'User',
                required: [true, 'The user is required']
            },
            reason:{
                type:Number,
                required:[true,'Reason is required'],
            },
            latitude:{
                type:Number,
                required:[true,'latitude is required'],
            },
            longitude:{
                type:Number,
                required:[true,'longitude is required'],
            }
        },
        resumeDay:{
            user: {
                type: Schema.Types.ObjectId,
                ref:'User',
                required: [true, 'The user is required']
            },
            reason:{
                type:Number,
                required:[true,'Reason is required'],
            },
            latitude:{
                type:Number,
                required:[true,'latitude is required'],
            },
            longitude:{
                type:Number,
                required:[true,'longitude is required'],
            }
        },
        resumeWeek:{
            user: {
                type: Schema.Types.ObjectId,
                ref:'User',
                required: [true, 'The user is required']
            },
            reason:{
                type:Number,
                required:[true,'Reason is required'],
            },
            latitude:{
                type:Number,
                required:[true,'latitude is required'],
            },
            longitude:{
                type:Number,
                required:[true,'longitude is required'],
            }
        },
        resumeMonth:{
            user: {
                type: Schema.Types.ObjectId,
                ref:'User',
                required: [true, 'The user is required']
            },
            reason:{
                type:Number,
                required:[true,'Reason is required'],
            },
            latitude:{
                type:Number,
                required:[true,'latitude is required'],
            },
            longitude:{
                type:Number,
                required:[true,'longitude is required'],
            }
        },
    },
    {
        timestamps: true,
    }
)
timeRecordSchema.methods.toJSON = function () {
    const { __v, _id, password, ...userTimes } = this.toObject();
    userTimes.id = _id;
    return userTimes;
}
module.exports = model("TimeRecord", timeRecordSchema);