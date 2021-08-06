const router = require(".");

router.get('/', async (req, res) => {

    res.render('main')
})

router.get('/login', async (req, res) => {

    res.render('login')
})
