'use strict';
const seedUserProfile = require('./seed_user_profile');
const seedUser = require('./seed_user');

exports.seed = (queryInterface) => {
    return seedUserProfile.seed(queryInterface).then((resultUserProfile) => {
        return seedUser.seed(queryInterface).then((resultUser) => {
            return resultUser;
        });
    });
};

exports.clean = (queryInterface) => {
    return seedUserProfile.clean(queryInterface).then((resultUserProfile) => {
        return seedUser.clean(queryInterface).then((resultUser) => {
            return resultUser;
        });
    });
};