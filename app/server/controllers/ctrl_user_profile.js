const db = require("../models/index");

exports.getById = function (id) {
    return db.user_profile.findById(id).then((userProfile) => {
        return userProfile;
    });
};