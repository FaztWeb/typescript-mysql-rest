import { Router } from 'express'
import { getPosts, createPost, getPost, deletePost, updatePost } from '../controllers/post.controller'

const router = Router();

router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default router;