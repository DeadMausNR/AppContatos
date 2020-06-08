import * as FileSystem from 'expo-file-system';
import { inserirContato, buscarContatos, atualizarContato, deletarContato } from '../helpers/db';

export const ADD_CONTATO = 'ADD_CONTATO';
export const UPDATE_CONTATO = 'UPDATE_CONTATO';
export const DELETE_CONTATO = 'DELETE_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';

export const listarContatos = () => {
    return async dispatch => {
        try {
            const resultadoDB = await buscarContatos();
            dispatch({ type: LISTA_CONTATOS, contatos: resultadoDB.rows._array });
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
};

export const addContato = (contato) => {
    return async dispatch => {
        var novoPath = '';
        if (typeof contato.imagem !== 'undefined') {
            const nomeArquivo = contato.imagem.split("/").pop();
            novoPath = FileSystem.documentDirectory + nomeArquivo;

            try {
                await FileSystem.moveAsync({
                    from: contato.imagem,
                    to: novoPath
                });

                contato.imagem = novoPath;

            } catch (err) {
                console.log(err);
                throw err;
            }
        }

        const resultadoDB = await inserirContato(contato);
        contato.key = resultadoDB.insertId;

        dispatch({ type: ADD_CONTATO, contato });
    }
}

export const updateContato = (contato) => {
    return async dispatch => {
        var novoPath = '';
        if (typeof contato.imagem !== 'undefined') {
            const nomeArquivo = contato.imagem.split("/").pop();
            novoPath = FileSystem.documentDirectory + nomeArquivo;

            try {
                await FileSystem.moveAsync({
                    from: contato.imagem,
                    to: novoPath
                });

                contato.imagem = novoPath;

            } catch (err) {
                console.log(err);
                throw err;
            }
        }

        await atualizarContato(contato);

        dispatch({ type: UPDATE_CONTATO, contato });
    }
}

export const deleteContato = (key) => {
    return async dispatch => {
        await deletarContato(key);

        dispatch({ type: DELETE_CONTATO, key });
    }
}