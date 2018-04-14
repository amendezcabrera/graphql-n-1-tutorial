const ctrlUser = require('../controllers/ctrl_user');

const resolvers = {
        Query: {
            users: (root, {id}, context) => ctrlUser.get(id)
        },

        Mutation: {
        }
    }
;

module.exports = resolvers;