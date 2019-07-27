// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    createOne: function (cb) {
        orm.createOne("cats", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    createOne: function (cols, vals, cb) {
        orm.createOne("cats", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("cats", objColVals, condition, function (res) {
            cb(res);
        });
    },
    deleteOne: function (condition, cb) {
        orm.deleteOne("cats", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;