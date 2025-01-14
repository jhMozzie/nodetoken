import User from '../models/User.js'

export const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

export const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

export const getUserById = async(req, res) =>{
    const user = await User.findByPk(req.params.id);
    res.json(user || {})
}

export const updateUser = async(req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    }else{
        res.status(404).json({error: 'User not found'})
    }
}

export const deleteUser = async(req, res) => {
    const user = await User.findByPk(req.params.id)
    if(user){
        await user.destroy();
        res.json({message: 'User deleted'})
    }else{
        res.status(404).json({error: 'User not found'})
    }
}