const skills = [
    {id: 12345, skill: 'css',  learned: true},
    {id: 16785, skill: 'HTML', learned: true},
    {id: 18765, skill: 'JavaScript', learned: true},
    {id: 19075, skill: 'Express', learned: false},
    {id: 13679, skill: 'git/version control', learned: true},
    {id: 17634, skill: 'node JS', learned: false}
];


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
};

function create(skill) {
    skill.id = Date.now() % 100000;
    skill.learned = false;
    skills.push(skill);
};

function getAll() {
    return skills
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
};