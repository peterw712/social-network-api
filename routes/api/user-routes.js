const router = require('express').Router();
const { getAllUsers, addFriend, removeFriend, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controller');

// set up get all users and post created user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// set up get one, update and delete at the user's id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// route to add and remove friends by id
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;