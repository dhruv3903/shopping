const router=require('express').Router()
const regc=require('../controllers/regcontroller')
const productc=require('../controllers/productscontroller')
const cartc=require('../controllers/cartcontroller')
const upload=require('../helpers/multer')


router.post('/reg',regc.register)
router.post('/logincheck',regc.logincheck)
router.post('/addproduct',upload.single('img'),productc.addproduct)
router.get('/allproducts',productc.allproducts)
router.get('/singledata/:id',productc.singledata)
router.put('/productupdate/:id',upload.single('img'),productc.productupdate)
router.get('/stockdata',productc.stockdata)
router.post('/cart',productc.cart)
router.post('/cartvalue/:username',cartc.cartvalue)
router.get('/userdata/:username',cartc.userdata)


module.exports=router