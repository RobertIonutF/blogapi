const router = require('express').Router();
const post_controller = require('../controllers/post-controller');

router.get('/', post_controller.getPosts);
router.get('/:id', post_controller.getPost);
router.post('/', post_controller.createPost);
router.patch('/:id', post_controller.updatePost);
router.delete('/:id', post_controller.deletePost);

module.exports = router;