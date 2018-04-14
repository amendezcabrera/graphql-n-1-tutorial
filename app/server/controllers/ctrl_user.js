const db = require("../models/index");

exports.get = function (id = null) {
    // TODO Check admin role to return all the users
    return id ? db.user.findById(id).then((user) => {
        return [user];
    }) : db.user.findAll();
};