"use strict";

const User = require("../../models/User");

const output = { 
    home : (req, res) =>{
        res.render("home/index");
    },

    login : (req, res) =>{
        res.render("home/login");
    },

    register : (req, res) =>{
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
     },
};

module.exports = {
    output,
    process,
}; // 객체에서 key만 입력하면 key와 같은 value를 넘겨주게 된다.