const routes = (handler) => [
    {
        method: 'POST',
        path: '/todos',
        handler: handler.postToDo,
        options: {
            auth: 'todo_list_strategy',
        },
    },
    {
        method: 'GET',
        path: '/todos',
        handler: handler.getToDos,
        options: {
            auth: 'todo_list_strategy',
        },
    },
    {
        method: 'GET',
        path: '/todos/{toDoId}',
        handler: handler.getToDoById,
        options: {
            auth: 'todo_list_strategy',
        },
    },
    {
        method: 'DELETE',
        path: '/todos/{toDoId}',
        handler: handler.deleteToDoById,
        options: {
            auth: 'todo_list_strategy',
        },
    },
];

module.exports = routes;
