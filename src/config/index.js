const dotenv = require("dotenv");
const path = require("path");

const res = dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV || 'dev'}.env`)
});

if (res.error ) {
    throw new Error(res.error)
}


module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 3000,
    API_ENTITY : process.env.API_ENTITY || 'https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/'
}