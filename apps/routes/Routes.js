const router = require('express').Router();
const { homepage } = require('../controllers/pagesController');
const { students, studentPost, studentDelete } = require('../controllers/ApiController');

router.get('/', homepage);
router.get('/api/students', students);

router.post('/api/students', studentPost);
router.delete('/api/students/:id', studentDelete);

module.exports = router;
