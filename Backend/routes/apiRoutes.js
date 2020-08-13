const {Router} = require('express');
const router = Router()
const {PostsCreate,GetPost,detailsCreate,detailsUpdate,postDelete,createUserRequest,getUserRequests,deleteUserRequests
,createNormalRequest,getNormalRequests,deleteNormalRequests,amountpaycreate,verifyAmountPayment,createOTP,verifyOTP} = require("../controllers/apiControllers");
const {verifyAdmin} = require("../middlewares/authenticate")
const upload = require('../utils/multer');

router.post('/owner/listing/create', verifyAdmin, PostsCreate)

router.get('/owner/listings', verifyAdmin, GetPost)

router.post('/owner/listing/home/:homeId', upload.array('images', 10) ,verifyAdmin, detailsCreate)

router.patch('/owner/listing/home/update/:homeId', verifyAdmin, detailsUpdate)

router.delete('/owner/listing/home/delete/:homeId', verifyAdmin, postDelete)

router.post('/user/request', verifyAdmin, createUserRequest);

router.get('/admin/userrequests', verifyAdmin, getUserRequests);

router.delete('/admin/delete/userrequests/:requestId', verifyAdmin, deleteUserRequests);

router.post('/user/book/request', verifyAdmin, createNormalRequest);

router.get('/admin/normalrequests', verifyAdmin, getNormalRequests);

router.delete('/admin/delete/normalrequests/:requestId', verifyAdmin, deleteNormalRequests);

router.post('/user/pay', verifyAdmin, amountpaycreate);

router.post('/user/pay/verify', verifyAdmin, verifyAmountPayment);

router.post('/owner/listing', verifyAdmin, createOTP);

router.post('/owner/listing/verify', verifyAdmin, verifyOTP);


module.exports = router