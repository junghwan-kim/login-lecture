'use strict';

const User = require('../../models/User');

const UserStorege = require('../../models/UserStorege');


const output = {
    home : (req, res) => {
        res.render('home/index');
    },    
    login : (req, res)=>{
        res.render('home/login');
    },
    register : (req, res) => {
        res.render('home/register');
    }
};


const process = {
    login : (req, res) =>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response)
        // const id = req.body.id;
        // const pwd = req.body.pwd;
        
        // const users = UserStorege.getUsers("id","pwd");

        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.pwd[idx] === pwd){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        //  response.success = false;
        //  response.msg = "로그인에 실패했습니다";
         
    }
};

module.exports = {
    output,
    process,
}
