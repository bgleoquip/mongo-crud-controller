const test = require('tap').test;
const { setMongo, getAllItems, updateAnItem, addValidItem, removeAnItem, removeById } = require("../index");

test('smoke test', function (t) {
        var m = setMongo("testC","mongodb://localhost:27017");
        t.equal(m, false);       
        t.end();
});
