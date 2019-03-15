const test = require('tap').test;
const { setMongo, getAllItems, updateAnItem, addValidItem, removeAnItem, removeById } = require("..");

test('smoke test', function (t) {
        setMongo("testC", "mongodb://localhost:27017");
        const clientInput = {};
        clientInput.options = {
                model: "test",
                data: {},
                selector: {},
                collection: "testCollection",
                uid: null,
                caseSensitive: false,
                searchText: "",
                searchFields: ["description", "name"]
        }
        var x = getAllItems(clientInput)
        console.log(x);
        t.equal(x.length, 4);
        t.end();
});
