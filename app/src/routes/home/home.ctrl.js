'use strict';

const output = {
    home : (req, res) => {
        res.render('home/index');
    },    
    login : (req, res)=>{
        res.render('home/login');
    }
};


const users = {
    id: ["test1","test2","test3"],
    pwd: ["1234","1111 ","1456"],
}


const process = {
    login : (req, res) =>{
        const id = req.body.id;
        const pwd = req.body.pwd;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pwd[idx] === pwd){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success: false,
            msg:"로그인에 실패했습니다",
        })

    }
};


module.exports = {
    output,
    process,
}
