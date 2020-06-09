export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        },
        {
            item: 'Build a simple reducer and initial state',
            completed: false,
            id: 2
        },
        {
            item: 'Set up state in your component',
            completed: false,
            id: 3
        },
        {
            item: 'Adding todos',
            completed: false,
            id: 4
        },
        {
            item: 'Toggle the completed field',
            completed: false,
            id: 5
        },
        {
            item: 'Clearing completed todos',
            completed: false,
            id: 6
        },
        {
            item: 'Add TL as a reviewer on my pull-request',
            completed: false,
            id: 7
        },
        {
            item: 'Submit a Pull-Request',
            completed: false,
            id: 8
        },
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            };
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo
                    }
                })
            };
        case 'CLEAR_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    if (todo.completed === true) {
                        return false
                    } else {
                        return true
                    }
                })
            };
        default:
            return state;
    }
};
