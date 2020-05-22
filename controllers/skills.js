const skillsDb = require('../models/skills');



module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    skillsDb.deleteOne(req.params.id);
    res.redirect('/skills');
};

function create(req, res) {
    skillsDb.create(req.body);
    res.redirect('/skills');
};

function newSkill(req, res) {
    res.render('skills/new.ejs')
};


function index(req, res, next) {
    res.render('skills/index', {
        skills: skillsDb.getAll()
    });
};

function show(req, res, next) {
    res.render('skills/show', {
        skill: skillsDb.getOne(req.params.id)
    });
};
