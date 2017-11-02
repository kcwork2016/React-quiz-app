
const add = color => {

    return dispatch => {
        // action 1
        dispatch({ type: actionTypes.ADD_REQUEST, color });

        return fetch('http://localhost:3000/api/colors', {
            method: 'POST',
            body: JSON.stringify(color),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(() => fetch('http://localhost:3000/api/colors'))
            .then(res => res.json())
            .then(colors => dispatch({ type: actionTypes.REFRESH_DONE, colors}));

    };

};