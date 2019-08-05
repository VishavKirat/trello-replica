import express from 'express'
import storeController from '../api/Controller/storeController'
import { runInContext } from 'vm';
const router = express();

router.post('/tasks/new',storeController.createTask)
router.get('/tasks',storeController.findAllTasks)
// router.post('/tasks/update',storeController.updateTask)
router.get('/groups',storeController.findAllGroups)
router.get('/comments',storeController.findAllComments)
router.get('/users',storeController.findAllUsers)
router.get('/groups/:id',storeController.findOneGroup)
router.post('/tasks/update/:id',storeController.updateOneTask)
router.get('/tasks/:id',storeController.findOneTask)

export default router
