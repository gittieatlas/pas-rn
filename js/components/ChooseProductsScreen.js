import React, {PropTypes} from 'react'
import {View, Text, StyleSheet, Image, TextInput} from 'react-native'
import {Button, Divider} from 'react-native-elements'
import * as colors from '../styles/colors';
import styles from '../styles/globalStyles'
import Icon from 'react-native-vector-icons/FontAwesome';

const ChooseProductsScreen = (props) => {
	return (
		<View style={styles.container}>
			<View style={{flexDirection: 'row', height: 125, paddingTop: 8}}>

				<Image style={{width: 100, height: 100}}
					   source={require('../images/bread.png') }
				resizeMode={'contain'}/>

				{/*<Image style={{width: 100, height: 100}}*/}
					   {/*source={{uri: 'http://vignette2.wikia.nocookie.net/markiplier/images/4/4a/IamBread.png'}}*/}
					   {/*resizeMode={'contain'}/>*/}
				<View style={{flex: .5}}>
					<Text style={{fontWeight: 'bold'}}>Product Name</Text>
					<Text>Product Description</Text>
					<Text>Product Sku</Text>
				</View>
				<View style={{width: 50, height: 50}}>
					<Icon style={{alignSelf: 'center', paddingVertical: 8}}
						name="plus"
						color={colors.logoBlue}
						size={20}/>
					<TextInput style={[styles.textInput, {textAlign: 'center'}]}
					placeholder={'0'}
					keyboardType={'numeric'}/>
					<Icon style={{alignSelf: 'center', paddingVertical: 8}}
						name="minus"
						color={colors.logoBlue}
						size={20}/>
				</View>
			</View>
			<Divider style={{margin: 16}}/>
			<Button style={{flex: 1}}
				title='NEXT'
				onPress={props.onButtonPress}
				backgroundColor={colors.logoBlue}/>
		</View>
	)
};


ChooseProductsScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired

};

export default ChooseProductsScreen