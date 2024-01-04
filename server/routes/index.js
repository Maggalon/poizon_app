const Router = require('express')
const userRouter = require('./userRouter')
const HqdController = require('../controllers/hqdController')
//const typeRouter = require('./typeRouter')
const multer = require('multer')
const checkAuth = require('../middleware/checkAuth')
const gender = require('../controllers/gender')
const category = require('../controllers/category')
const hqdModel = require('../models/Hqd')

const router = new Router()


const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    },
    filename: (_,file,cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({ storage })

router.use('/user', userRouter )

router.post('/hqd', upload.single('file'), HqdController.registration);

router.post('/gender', upload.single('file'), gender.registration)
router.post('/category',upload.single('file'), category.registration)
router.get('/product-info/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;

        const product = await hqdModel.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Товар не найден' });
        }

        const productInfo = {
            id: product._id,
            name: product.name,
            file: product.file,
            description: product.discription,  
            rating: product.rating,
            category: product.category,
            gender: product.gender,
        };

        res.json(productInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'я ебал это дерьмо блядское' });
    }
});
router.get('/products-by-category/:category', async (req, res) => {
    try {
        const category = req.params.category;

        const products = await hqdModel.find({ category });

        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'или шмоток нет или категории такой нет' });
        }

        const productsList = products.map(product => ({
            name: product.name,
            file: product.file
            
        }));

        res.json(productsList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'чунга чанга ебанулась' });
    }
});

// выдача всех товаров
router.get('/all-products', async (req, res) => {
    try {
        const products = await hqdModel.find();

        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'Товары не найдены' });
        }

        const productsList = products.map(product => ({
            id: product._id,
            name: product.name,
            file: product.file,
            description: product.discription,  
            rating: product.rating,
            category: product.category,
            gender: product.gender,
        }));

        res.json(productsList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'ошибка во всех товарах' });
    }
});

router.get('/all-categories', async (req, res) => {
    try {
        const categories = await hqdModel.aggregate([
            { $group: { _id: "$category", file: { $first: "$file" } } }
        ]);

        if (!categories || categories.length === 0) {
            return res.status(404).json({ message: 'Категории не найдены' });
        }

        res.json(categories.map(category => ({
            name: category._id,
            file: category.file
        })));
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'ошибка в all категориях' });
    }
});


module.exports = router