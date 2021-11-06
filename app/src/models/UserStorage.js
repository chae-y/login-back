"use strict";

class UserStorage{
    static _users = {//변수를 public에서 private로 하는것 # ->e데이터 은닉
        id: ["chae", "young", "lee"],
        password: ["123", "456", "789"],
        name:["가", "나", "다"],
    };

    static getUsers(...fields){//...하면 배열로 된다
        const users = this._users;
        const newUsers = fields.reduce((newUsers, field)=>{ // 두번째 변수 = fields에서 하나씩 넣어서 돌아가는것
            if(users.hasOwnProperty(field)){//users에 해당하는 키값이 있냐고 물어봄
                newUsers[field] = users[field];
            }
            return newUsers;//이 리턴값이 다음 newUsers로 들어감
        },{});
        return newUsers;
    }
    static getUserInfo(id){
        const users = this._users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
};

module.exports = UserStorage;