'use strict';

//모델 class화 > 은닉 #은 숨김처리
class UserStorege {
    static #users = {
        id: ["test1","test2","test3"],
        pwd: ["1234","1111 ","1456"],
        name: ["홍길동","김길동","장길동"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }   
            return newUsers;         
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

    static save(userInfo){
        
        return {success: true};
    }
}

module.exports = UserStorege;