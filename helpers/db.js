import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS contato (key INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, telefone TEXT, imagem TEXT);',
                [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                }
            );
        });
    });

    return promise;
}

export const buscarContatos = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM contato',
                [],
                (_, resultado) => {
                    resolve(resultado)
                },
                (_, err) => {
                    reject(err)
                }
            );
        });
    });
    return promise;
}

export const inserirContato = (contato) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO contato (nome, telefone, imagem) VALUES (?, ?, ?)',
                [
                    contato.nome,
                    contato.telefone,
                    contato.imagem
                ],
                (_, resultado) => {
                    resolve(resultado)
                },
                (_, err) => {
                    reject(err)
                }
            );
        });
    });

    return promise;
}

export const atualizarContato = (contato) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE contato set nome = ?, telefone = ?, imagem = ? WHERE key = ?',
                [
                    contato.nome,
                    contato.telefone,
                    contato.imagem,
                    contato.key
                ],
                (_, resultado) => {
                    resolve(resultado)
                },
                (_, err) => {
                    reject(err)
                }
            );
        });
    });

    return promise;
}

export const deletarContato = (key) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM contato WHERE key = ?',
                [
                    key
                ],
                (_, resultado) => {
                    resolve(resultado)
                },
                (_, err) => {
                    reject(err)
                }
            );
        });
    });

    return promise;
}