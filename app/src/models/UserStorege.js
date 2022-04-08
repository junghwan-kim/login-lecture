'use strict';

const db = require("../config/db");

//모델 class화 > 은닉 #은 숨김처리
class UserStorege {
    
    static getUserInfo(id){
       return new Promise((resolve, reject) =>{
            const query = "select *  from users where id=?";
            db.query(query,[id], (err, data) =>{
                if(err){
                    reject(`${err}`);        
                } else {
                     resolve(data[0]);
                }
                //console.log(data);
            });               
        });                        
    }


    static async save(userInfo){
        return new Promise((resolve, reject) =>{
            const query = "insert into users (id, name, pwd) values (?,?,?);";
            db.query(
                query
                ,[userInfo.id, userInfo.name, userInfo.pwd ]
                ,(err) =>{
                    if(err){
                        reject(`${err}`);    
                    } else {
                        resolve({success: true});              
                    }
            });               
        }); 

    }
}

module.exports = UserStorege;
