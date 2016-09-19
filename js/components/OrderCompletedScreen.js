import React, {PropTypes} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Button} from 'react-native-elements'
import * as colors from '../styles/colors';
import styles from '../styles/globalStyles'

const OrderCompletedScreen = (props) => {
	return (
		<View style={styles.container}>
			<Button
				title='GO HOME'
				onPress={props.onButtonPress}
				backgroundColor={colors.logoBlue}
				style={{flex: 1}}/>

		</View>
	)
};

OrderCompletedScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
};

export default OrderCompletedScreen