"use strict";

const fs = require("fs").promises;

class UserStorage{

    static _getUserInfo(data, id){
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const userKeys = Object.keys(users);
            const userInfo = userKeys.reduce((newUser, info)=>{
                newUser[info] = users[info][idx];
                return newUser;
            },{});
        return userInfo;
    }

    static _getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll)   return users;
        const newUsers = fields.reduce((newUsers, field)=>{ // 두번째 변수 = fields에서 하나씩 넣어서 돌아가는것
            if(users.hasOwnProperty(field)){//users에 해당하는 키값이 있냐고 물어봄
                newUsers[field] = users[field];
            }
            return newUsers;//이 리턴값이 다음 newUsers로 들어감
        },{});
        return newUsers;
    }

    static getUsers(isAll, ...fields){//...하면 배열로 된다
        return fs.readFile("./src/databases/users.json") // promise반환
        .then((data)=>{
            return this._getUsers(data, isAll, fields);
        })
        .catch(console.error);
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json") // promise반환
        .then((data)=>{
            return this._getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static async save(userInfo){
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디 입니다";
        }
        
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success: true};
    }
};

module.exports = UserStorage;