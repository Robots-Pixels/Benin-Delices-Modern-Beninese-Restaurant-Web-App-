import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) => {
    const {nom, prenom, password, email, telephone} = req.body;
    let hashedPassword, newUser;
    if(password){
        if(password.length < 8){
            return res.status(400).json({message: "Le mot de passe doit contenir au moins 8 caractères", success: false})
        }
        hashedPassword = bcryptjs.hashSync(password, 10);
        newUser = new User({nom, prenom, password:hashedPassword, email, telephone});
    }

    try {
        await newUser.save();
        res.status(201).json({message: "Vous etes inscrit avec succès", success: true});
    } catch (error) {
        if(error.name === "ValidationError"){
            return res.status(400).json({message: "Remplissez tous les champs requis", success: false});
        }

        if(error.code === 11000){
            if(error.keyValue){
                return res.status(400).json({message: "Email ou telephone déjà utilisé", success: false});
            }
        }
        res.status(500).json(error);
    }
}
