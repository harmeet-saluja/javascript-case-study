/* A class to keep track of students in a school */
var School = function () {
    this.grades = {}
};

School.prototype.roster = function () {
    let gradeKeys = Object.keys(this.grades);
    gradeKeys.forEach(function (gradeKey) {
        this.grades[gradeKey].sort();
    }, this);
    return this.grades;
};

School.prototype.add = function (studentName, gradeNumber) {
    if (this.grades[gradeNumber])
        this.grades[gradeNumber].push(studentName);
    else
        this.grades[gradeNumber] = [studentName];
};

School.prototype.grade = function (gradeNumber) {
    if (this.grades[gradeNumber])
        return this.grades[gradeNumber].sort();
    return [];
};


module.exports = School;
