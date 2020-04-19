import React from 'react';
import { StyleSheet, View } from 'react-native';

import Contato from './screens/Contatos';

export default function App() {

	return (
		<View style={styles.telaPrincipalView}>
			<Contato />
		</View>
	);
}

const styles = StyleSheet.create({
	telaPrincipalView: {
		flex: 1
	}
});