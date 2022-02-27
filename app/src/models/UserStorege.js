'use strict';

const fs = require('fs').promises;

//모델 class화 > 은닉 #은 숨김처리
class UserStorege {
    
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;    
    }


    static getUsers(...fields){
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }   
            return newUsers;         
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        //const users = this.#users;

        return fs.readFile('./src/databases/users.json')
            .then((data) => {
                 return this.#getUserInfo(data, id);
            })
            .catch(console.error);
        
    }

    static save(userInfo){        
        return {success: true};
    }
}

module.exports = UserStorege;