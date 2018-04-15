const db = require("../models/index");
const _ = require('lodash');

exports.get = (ids) => {
    return db.user_profile.findAll({
        where: {
            id: ids
        }
    }).then((userProfiles) => {
        const userProfileById = _.keyBy(userProfiles, "id");
        return ids.map(userProfileId => userProfileById[userProfileId]);
    });
};