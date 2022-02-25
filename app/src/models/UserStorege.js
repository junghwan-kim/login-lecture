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
}

module.exports = UserStorege;