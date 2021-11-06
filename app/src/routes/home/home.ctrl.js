"use strict";

const hello = (req, res)=>{
    res.render('home/index');
}

const login = (req, res)=>{
    res.render('home/login');//->z컨트롤러
}

module.exports = {
    hello,
    login,
};
//=>키값없으면 같은이름의 키값