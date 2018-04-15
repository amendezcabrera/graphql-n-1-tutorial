const db = require("../../server/models/index");
const faker = require('faker');
const TABLE_NAME = "user";

exports.seed = (queryInterface) => {
    console.log("-- Seed user table --");
    return db.user_profile.findAll({
        'attributes': ['id']
    }).then((userProfiles) => {
        let users = [];
        for (let i = 0; i < 50; i++) {
            const userProfile = userProfiles[Math.floor(Math.random() * userProfiles.length)];
            const user = {
                name: faker.fake("{{name.firstName}}"),
                userProfileId: userProfile.id,
                username: faker.fake("{{internet.userName}}"),
                password: faker.fake("{{internet.password}}"),
                email: faker.fake("{{internet.email}}"),
                createdAt: new Date(),
                updatedAt: new Date()
            };
            users.push(user);
        }
        return queryInterface.bulkInsert(TABLE_NAME, users);
    });
};

exports.clean = (queryInterface) => {
    return (
        db.sequelize.query("" +
            "DELETE FROM \"" + TABLE_NAME + "\";" +
            //Reseteamos el id serial
            "TRUNCATE TABLE \"" + TABLE_NAME + "\" RESTART IDENTITY CASCADE;"
        )
    );
};