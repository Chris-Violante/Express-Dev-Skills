const skillsDb = require('../models/skills');

function index(req, res, next) {
    res.render('skills/index', {
        skills: skillsDb.getAll()
    });
}

function show(req, res, next) {
    res.render('skills/show', {
        skill: skillsDb.getOne(req.params.id)
    });
};

module.exports = {
    index,
    show
};