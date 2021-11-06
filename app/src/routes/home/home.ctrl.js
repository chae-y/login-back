"use strict";

const output = {
    hello: (req, res)=>{
        res.render('home/index');
    },
    login: (req, res)=>{
        res.render('home/login');//->컨트롤러
    }
}

const process = {
    login: (req, res)=>{
        console.log(req.body);
    }
}

module.exports = {
    output,
    process
};
//=>키값없으면 같은이름의 키값