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
    login: (req, res)=>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req,res)=>{
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};
//=>키값없으면 같은이름의 키값