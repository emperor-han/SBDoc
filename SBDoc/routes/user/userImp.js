/**
 * Created by sunxin on 2016/11/9.
 */
var user=require("./user");
var interface=[
    {
        "method":"POST",
        "path":"/user/login",
        "param": {
            name:{
                type:String
            },
            password:{
                type:String
            }
        },
        "data":{

        },
        handle:user.login
    },
    {
        "method":"POST",
        "path":"/user/save",
        "param": {
            userid:{
                optional:1,
                type:String
            },
            name:{
                optional:1,
                type:String
            },
            password:{
                optional:1,
                type:String
            },
            sex:{
                optional:1,
                type:String
            },
            age:{
                optional:1,
                type:Number,
                validate:{
                    value:{
                        gte:0,
                        lte:100
                    }
                }
            },
            company:{
                optional:1,
                type:String
            },
            photo:{
                optional:1,
                type:String
            },
            qq:{
                optional:1,
                type:String
            },
            email:{
                optional:1,
                type:String
            },
            question:{
                optional:1,
                type:String
            },
            answer:{
                optional:1,
                type:String
            }
        },
        "data":{

        },
        handle:user.save
    },
    {
        "method":"POST",
        "path":"/user/logout",
        "param": {
        },
        "data":{

        },
        handle:user.logout
    },
    {
        "method":"PUT",
        "path":"/user/editpass",
        "param": {
            userid:{
                type:String
            },
            oldpass:{
                type:String
            },
            newpass:{
                type:String
            }
        },
        "data":{

        },
        user:1,
        handle:user.editPass
    },
    {
        "method":"PUT",
        "path":"/user/reset",
        "param": {
            name:{
                type:String
            },
            password:{
                type:String
            },
            answer:{
                type:String
            }
        },
        "data":{

        },
        handle:user.reset
    },
    {
        "method":"GET",
        "path":"/user/question",
        "param": {
            name:{
                type:String
            },
        },
        "data":{

        },
        handle:user.question
    },
];

module.exports=interface;