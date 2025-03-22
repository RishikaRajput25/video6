import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=new Schema({
    
        videoFile:{
            type:String,//cloudanary url
            required:true,
   
        },
        thumbnail:{
            type:String,//cloudanary url
            required:true,
        },
        title:{
            type:String,//cloudanary url
            required:true,
        },
        description:{
            type:String,//cloudanary url
            required:true,
        },
        duration:{
            type:String,//cloudanary url
            required:true,
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
           type:Boolean,
            default:0
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
},
{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video",videoSchema)