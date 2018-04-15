const DataLoader = require('dataloader');
const ctrlUserProfile = require('./controllers/ctrl_user_profile');

const userProfileLoader = new DataLoader(userProfilesIds => {
    return ctrlUserProfile.get(userProfilesIds);
});

module.exports = {
    userProfileLoader
};