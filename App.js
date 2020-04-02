import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import InputContato from './components/InputContato';
import ContatoItem from './components/ContatoItem';

export default function App() {
	const [contatos, setContatos] = useState([]);
	const [contadorContatos, setContadorContatos] = useState(10);

	const adicionarContato = (contatoNome, contatoTelefone) => {
		setContatos((contatos) => {
			contatos = [...contatos, { key: contadorContatos.toString(), value: { contatoNome, contatoTelefone } }];
			setContadorContatos(contadorContatos + 2);
			return contatos;
		});
	}

	const deletarContato = (key) => {
		setContatos(contatos => {
			return contatos.filter(contato => {
				return contato.key !== key;
			});
		});
	}

	return (
		<View style={styles.telaPrincipalView}>

			<InputContato onAdicionarContato={adicionarContato} />

			<View>
				<Text style={styles.ListaHeader}>Contatos Salvos</Text>
				<FlatList
					style={styles.FlatListStyle}
					data={contatos}
					renderItem={
						contato => (
							<ContatoItem contato={contato} onDelete={deletarContato} />
						)
					}
				/>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	telaPrincipalView: {
		paddingBottom: 50,
		paddingTop: 50
	},
	ListaHeader: {
		textAlign: 'center',
		marginTop: 8,
		fontSize: 30
	},
	FlatListStyle: {
		marginTop: 8,
		height: '80%'
	}
});