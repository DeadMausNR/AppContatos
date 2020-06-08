import * as firebase from 'firebase';
import 'firebase/firestore';

import ENV from '../env';

if (!firebase.apps.length)
    firebase.initializeApp(ENV.Firebase);

const db = firebase.firestore();

export const buscarContatos = () => {
    return db.collection('contatos');
}

export const inserirContato = (contato) => {
    return db.collection('contatos').add({
        nome: contato.nome,
        telefone: contato.telefone,
        imagem: contato.imagem,
        lat: contato.lat,
        lng: contato.lng,
        createdAt: contato.createdAt
    });
}

export const atualizarContato = (contato) => {
    return db.collection('contatos').doc(contato.key).update({
        nome: contato.nome,
        telefone: contato.telefone,
        imagem: contato.imagem,
        lat: contato.lat,
        lng: contato.lng,
        createdAt: contato.createdAt
    });
}

export const deletarContato = (key) => {
    return db.collection('contatos').doc(key).delete();
}