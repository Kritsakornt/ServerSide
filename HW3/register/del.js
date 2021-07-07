let del = function(studentArray, student){
    delete studentArray.splice(studentArray.length-1,1)
    return studentArray;
}
module.exports = del;