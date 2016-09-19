import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button, FormLabel, FormInput} from 'react-native-elements'
import * as colors from '../styles/colors';
import styles from '../styles/globalStyles'

const CustomerInfoScreen = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.formElement}>
				<FormLabel>Customer Name</FormLabel>
				<FormInput
				defaultValue='Kosher World'
				inputStyle={{ color: colors.logoBlue,}}/>
			</View>
			<View style={styles.formElement}>
				<FormLabel>Customer Phone Number</FormLabel>
				<FormInput
					defaultValue={'908-987-9087'}
					inputStyle={{ color: colors.logoBlue,}}/>
			</View>
			<Button
				title='NEXT'
				onPress={props.onButtonPress}
				backgroundColor={colors.logoBlue}
				style={{flex: 1}}/>

		</View>
	)
};

CustomerInfoScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired,
	onModalButtonPress: PropTypes.func.isRequired
};

export default CustomerInfoScreen