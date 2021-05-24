"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var toDo = response.data;
    var id = toDo.id;
    var title = toDo.title;
    var completed = toDo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n        The Todo with ID: " + id + "\n        Has a title of: " + title + "\n        Is it completed? " + completed + "\n    ");
};
