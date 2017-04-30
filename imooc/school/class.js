var school = require("./school");
var teacher = require("./teacher");

teacher.add("teacher1");

function add(teacherName, students){
    teacher.add(teacherName);

    students.forEach(function(item, index){
        school.add(item);
    });
}

exports.add = add;
// 或写成  module.exports = add;
