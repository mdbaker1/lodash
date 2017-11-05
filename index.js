
var fs = require('fs');
var _ = require('lodash')
var contents = fs.readFileSync("data.json"); {
    var contact = JSON.parse(contents).items;
    console.log();
    console.log(">>>>> Contacts <<<<<");


    _.forEach(contact, function (contact) {
        console.log("------------------");
        console.log('First Name: ', contact.fname);
        console.log(' Last Name: ', contact.lname);
        console.log('       Age: ', contact.age);
        console.log("------------------");
    })
};