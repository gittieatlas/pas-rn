import React, {PropTypes} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements'
import * as colors from '../styles/colors';
import styles from '../styles/globalStyles'

const HomeScreen = (props) => {
	return (
		<View style={styles.container}>
			<Image
				source={require('../images/logo.png') }
				style={{width: 200, height: 200, alignSelf: 'center'}}
				resizeMode='contain'
			/>
			<Button
				title='ORDER ITEMS'
				onPress={props.onButtonPress}
				backgroundColor={colors.logoBlue}
				style={{flex: 1}}
			/>
		</View>
	)
};

export default HomeScreen