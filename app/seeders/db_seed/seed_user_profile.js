const db = require("../../server/models/index");
const TABLE_NAME = "user_profile";

exports.seed = (queryInterface) => {
    console.log("-- Seed user_profile table --");
    let userProfiles = [
        {
            name: "Administrador",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Moderador",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Registrado",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Autor",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];
    return queryInterface.bulkInsert(TABLE_NAME, userProfiles);
};

exports.clean = (queryInterface) => {
    return (
        db.sequelize.query("" +
            "DELETE FROM " + TABLE_NAME + ";" +
            //Reseteamos el id serial
            "TRUNCATE TABLE " + TABLE_NAME + " RESTART IDENTITY CASCADE;"
        )
    );
};