## Need to have following things in the client repo for using this package

// need to get from config.js 
const { dbName, dbUrl } = require('../config');
setMongo(dbName || "crud_mongodb", dbUrl || "mongodb://localhost:27017");

//// common routes 

app.route('/').post(commonController.getAllItems);

app.route('/add').post(commonController.addAnItem);

app.route('/delete').post(commonController.removeAnItem);

app.route('/update').post(commonController.updateAnItem);

## It holds req Header as json 
req.body.
options:

{

    caseSensitive: false;

    collection: collectionName;

    selector: {};
	
    data: {

    };

**   model: "";**

    redux: "";

    searchFields: [

    ];

    searchText: "";

    data: { };

    uid: null;

    match: { };

    sort: null;OR {createdBy: -1}

    limit: null;OR Numeric 

    skip: null;OR Numeric 

    project: null;OR {}

}