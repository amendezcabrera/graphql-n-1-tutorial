const db = require("../models/index");

exports.get = function (id = null) {
    return id ? db.user.findById(id).then((user) => {
        return [user];
    }) : db.user.findAll();
};