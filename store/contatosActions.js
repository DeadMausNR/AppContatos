export const ADD_CONTATO = 'ADD_CONTATO';
export const UPDATE_CONTATO = 'UPDATE_CONTATO';
export const DELETE_CONTATO = 'DELETE_CONTATO';

export const addContato = (contato) => {
    return {
        type: ADD_CONTATO, contato
    }
}

export const updateContato = (contato) => {
    return {
        type: UPDATE_CONTATO, contato
    }
}

export const deleteContato = (key) => {
    return {
        type: DELETE_CONTATO, key
    }
}