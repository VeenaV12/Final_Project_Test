const express = require('express')
const testRouter = express.Router()
const {getData, addData} = require('../Controller/testController')
const { addStudent, studentLogin, selectProject, logoutStudent } = require('../Controller/studentController')
const { addProject, getProject, displayProject} = require('../Controller/projectController')
const {postQuery, getPosts, postReply, deletePost, updatePost, updateReply, deleteReply} = require('../Controller/postController')
const {addReference, editReference, getReference} = require('../Controller/referenceController')
const { registerUser, authUser, getId} = require('../Controller/userController')
const { verifyToken } = require('../Middleware/jwtMiddleware')
const { signup, login } = require('../Controller/auth')



testRouter.get('/',getData)
testRouter.post('/',addData)

testRouter.post('/addstudent',addStudent)
//testRouter.post('/login',studentLogin)
testRouter.post('/logout',logoutStudent)

testRouter.post('/addproject',addProject)
testRouter.get('/getproject', verifyToken,getProject)
testRouter.post('/selectproject',verifyToken,selectProject)
testRouter.get('/displayproject',verifyToken,displayProject)



testRouter.post('/postquery/:student_id',postQuery)
testRouter.get('/getpost',verifyToken,getPosts)
testRouter.delete('/deletepost/:post_id',deletePost)
testRouter.patch('/updatepost/:post_id',updatePost)

testRouter.post('/postreply/:post_id',verifyToken,postReply)
testRouter.patch('/updatereply/:post_id/:reply_id',updateReply)
testRouter.delete('/deletereply/:post_id/:reply_id',deleteReply)

testRouter.post('/addreference/:project_id', addReference)
testRouter.patch('/editref/:ref_id', editReference)
testRouter.get('/getrefs', verifyToken,getReference)



//testRouter.post('/register', registerUser);
//testRouter.post('/login', authUser);
testRouter.get('/getid', verifyToken,getId)


testRouter.post('/signup', signup)
testRouter.post('/login', login)


module.exports = testRouter