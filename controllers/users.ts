import { request, response } from "express";

export const getUsers = (req = request, res = response)=>{
    res.json({
        msg:'getUsers'
    })
}

export const getUser = (req = request, res = response)=>{
    const {id} = req.params;
    res.json({
        msg:'getUser',
        id
    })
}

export const postUser = (req = request, res = response)=>{
    const {body} = req;
    res.json({
        msg:'postUsers',
        body
    })
}
export const putUser = (req = request, res = response)=>{
    const {body} = req;
    const {id} = req.params;
    res.json({
        msg:'putUsers',
        id,
        body
    })
}
export const deleteUser = (req = request, res = response)=>{
    const {id} = req.params;
    res.json({
        msg:'deleteUsers',
        id
    })
}