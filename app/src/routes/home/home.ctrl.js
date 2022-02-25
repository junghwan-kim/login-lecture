'use strict';

const UserStorege = require('../../models/UserStorege');


const output = {
    home : (req, res) => {
        res.render('home/index');
    },    
    login : (req, res)=>{
        res.render('home/login');
    }
};


const process = {
    login : (req, res) =>{
        const id = req.body.id;
        const pwd = req.body.pwd;
        
        const users = UserStorege.getUsers("id","pwd");

        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pwd[idx] === pwd){
                response.success = true;
                return res.json(response);
            }
        }

         response.success = false;
         response.msg = "로그인에 실패했습니다";
         return res.json(response)
    }
};

module.exports = {
    output,
    process,
}
