const skillsDb = require('../models/skills');



module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    req.body.learned = !!req.body.learned;
    skillsDb.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }

function edit(req, res) {
    const skill = skillsDb.getOne(req.params.id);
    res.render('skills/edit', {skill});
  }

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
