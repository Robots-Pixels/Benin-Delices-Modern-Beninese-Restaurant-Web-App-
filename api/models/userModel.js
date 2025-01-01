import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true
    },

    prenom:{
        type: String,
        required: false
    },

    password:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: false
    },
    
    telephone:{
        type: String,
        required: true
    }
}, 
    {
        timestamps: true
    }
)


export const User = mongoose.model("User", userSchema);