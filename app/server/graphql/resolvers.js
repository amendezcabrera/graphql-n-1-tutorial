const ctrlUser = require('../controllers/ctrl_user');
const ctrlUserProfile = require('../controllers/ctrl_user_profile');

const resolvers = {
        Query: {
            users: (root, {id}, context) => ctrlUser.get(id)
        },

        User: {
            userProfile(userData) {
                return ctrlUserProfile.getById(userData.userProfileId);
            }
        }
    }
;

module.exports = resolvers;