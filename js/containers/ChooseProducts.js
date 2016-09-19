import { connect } from 'react-redux'
import ChooseProductsScreen from '../components/ChooseProductsScreen'
import {navigatePush} from '../actions/actionNavigation'
import * as constants from '../utils/constants'

const mapStateToProps = (state) => {
	return {
	}
};

const productList = [
	{
		id: 1,
		name: 'Bread',
		image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		description: '140 case',
		sku: '12345'
	},
	{
		id: 2,
		name: 'Rolls',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		description: '20 case',
		sku: '34532'
	},
];

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush(constants.SCREEN_SPECIAL_REQUESTS))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChooseProductsScreen)