"use strict";

const users = {
    id: ["chae", "young", "lee"],
    password: ["123", "456", "789"],
}

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
        const id = req.body.id,
            password  = req.body.password;
        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        });
    }
}

module.exports = {
    output,
    process
};
//=>키값없으면 같은이름의 키값