const router = require("express").Router();
const { Post, Comment, User } = require('../models/');

router.get('/', async (req, res) => {
  try {
    //grab post models
    const postData = await Post.findAll({
      include: [User],
    });
  
    //map posts into an array
    const post = postData.map((post) => post.get({ plain: true }));
  
    res.render("homeposts", { post });
  }
  catch (err) {
    res.status(500).json(err)
  }
})

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User]
        },
      ]
    });

    if (!postData) {
      res.status(404).end();
      return
    } else {
      const post = postData.get({ plain: true })

      res.render('post', { post });
    }
  }
  catch (err) {
    res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('login');
});

router.get('/signup', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('signup');
});

module.exports = router;
