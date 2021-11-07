"use strict";

const User = require("../../models/User");

const output = {
    hello: (req, res)=>{
        res.render('home/index');
    },
    login: (req, res)=>{
        res.render('home/login');//->컨트롤러
    },
    register: (req,res)=>{
        res.render('home/register');
    }
};

const process = {
    login: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req,res)=>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};
//=>키값없으면 같은이름의 키값