const router = require('express').Router();
const { homepage } = require('../controllers/pagesController');
const { students, studentPost, studentDelete, studentDetail, studentUpdate } = require('../controllers/ApiController');

router.get('/', homepage);
router.get('/api/students', students);

router.post('/api/students', studentPost);
router.delete('/api/students/:id', studentDelete);
router.get('/api/students/:id', studentDetail);
router.put('/api/students/:id', studentUpdate);

module.exports = router;
