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
        required: true,
        minlength: 8,
    },

    email:{
        type: String,
        required: false,
        unique: true
    },
    
    telephone:{
        type: String,
        required: true,
        unique: true
    }
}, 
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

export default User;