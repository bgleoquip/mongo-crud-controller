const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
// name of our database
var dbname = "crud_mongodb";
// location of where our mongoDB database is located
var dburl = "mongodb://localhost:27017";
// Options for mongoDB
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const state = {
    db: null,
    dbname: dbname,
    dburl: dburl
};

const setMongo = (dbname, dburl) => {
    if (dbname) {
        state.dbname = dbname
        console.log("DB name updated:", state.dbname)
    }
    if (dburl) {
        state.dburl = dburl;
        console.log("DB name updated:", state.dburl)
    }
}
const connect = (cb) => {
    // if state is not NULL
    // Means we have connection already, call our CB
    if (state.db)
        cb();
    else {
        // attempt to get database connection
        MongoClient.connect(state.dburl, mongoOptions, (err, client) => {
            // unable to get database connection pass error to CB
            if (err)
                cb(err);
            // Successfully got our database connection
            // Set database connection and call CB
            else {
                state.db = client.db(state.dbname);
                cb();
            }
        });
    }
}

// returns OBJECTID object used to 
const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

// returns database connection 
const getDB = () => {
    return state.db;
}

const connection = (collection) => {
    return getDB().collection(collection)
}

module.exports = { setMongo, connection, getDB, connect, getPrimaryKey };
// help module https://github.com/noobcoder1137/Todo_Rest_CRUD_Application_JQuery_FetchAPI/blob/master/app.js