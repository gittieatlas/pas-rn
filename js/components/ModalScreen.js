import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import * as colors from '../styles/colors';
import styles from '../styles/globalStyles'

const ModalScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>This is a Modal Screen</Text>
			<Button
				title='Open Customer Info Screen'
				onPress={props.onButtonPress}
				backgroundColor={colors.logoOrange}
				style={{flex: 1}}/>
		</View>
	)
};

ModalScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
};

export default ModalScreen