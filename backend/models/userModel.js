import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true

    },
    password:{
        type:String,
        required:true
    },
    isFreelancer:{
        type:Boolean,
        required:true,
        default:false
    },
},{
    timestamps:true
})


userSchema.methods.deleteUser = async function(){
    await this.deleteOne()
}

const User = mongoose.model("User",userSchema)

export default User