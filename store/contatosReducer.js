import { ADD_CONTATO, UPDATE_CONTATO, DELETE_CONTATO } from './contatosActions';

const estadoInicial = {
    listaContatos: []
}

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            return {
                listaContatos: estado.listaContatos.concat(action.contato)
            }
        case UPDATE_CONTATO:
            let listaContatos = [];
            Object.assign(listaContatos, estado.listaContatos);
            listaContatos[listaContatos.findIndex(contato => contato.key === action.contato.key)] = action.contato;

            return {
                listaContatos
            }
        case DELETE_CONTATO:
            return {
                listaContatos: estado.listaContatos.filter(contato => contato.key !== action.key)
            }
        default:
            return estado;
    }
}