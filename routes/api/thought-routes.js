const router = require('express').Router();
const { getAllThoughts, addReaction, removeReaction, getThoughtById, addThought, updateThought, deleteThought } = require('../../controllers/thought-controller');

// set up get all thoughts
router
    .route('/')
    .get(getAllThoughts);

// get, update, or delete a single thought
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// set up route to post thought
router
    .route('/:userId')
    .post(addThought);

// add a reaction
router
    .route('/:Id/reactions')
    .post(addReaction);

// delete a reaction
router
    .route('/:Id/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;