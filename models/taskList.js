/**
 * Created by artwe on 13/06/2017.
 */
const config = require('../config/database');
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    due_date: {
        type: Date,
        required:false
    }
});

const Task = module.exports = mongoose.model('Task',taskSchema);

module.exports.addTask = function (task, callback) {
    task.save(task,callback);
}

module.exports.deleteTask = function (id,callabck) {

  Task.remove({_id: id},callabck);
}

module.exports.updateTask = function (id,task,callback) {
    Task.find({_id: id},function (err,user) {
        if(err) throw err;

        else
            Task.update(user[0],task,callback);

    });


}
