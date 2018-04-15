const ctrlUser = require('../controllers/ctrl_user');
const ctrlUserProfile = require('../controllers/ctrl_user_profile');

const resolvers = {
        Query: {
            users: (root, {id}, context) => ctrlUser.get(id)
        },

        User: {
            userProfile(userData, _args, {loaders}) {
                const userProfileId = userData.userProfileId > 0 ? userData.userProfileId : 0;
                return loaders.userProfileLoader.load(userProfileId);
            }
        }
    }
;

module.exports = resolvers;