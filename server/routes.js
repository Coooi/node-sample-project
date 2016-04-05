module.exports = function(app) {

    app.get('/', function(req, res) {
        res.type('text/plain');
        res.send('Welcome to AWS Training!');
    });

    function errorNotFound(res) {
        return res.status(404).send('Student not found!');
    }

    app.get('/instance/:id', function(req, res) {
        var model = require("./model.json");
        if (model.awsStudentInstances.length && req.params.id) {
            var students = model.awsStudentInstances,
                response;

            console.log("Instance requested, id: " + req.params.id);

            for (var i = 0; i < students.length; i++) {
                if (students[i].id == req.params.id) {
                    response = students[i];
                }
            }
            if (response) {
                return res.status(200).json(response);
            } else {
                return errorNotFound(res);
            }
        } else {
            return errorNotFound(res);
        }
    });

    app.get('/students', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        var students = require("./model.json");
        res.status(200).json(students);
    });

};
