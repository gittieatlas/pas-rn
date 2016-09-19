import { connect } from 'react-redux'
import HomeScreen from '../components/HomeScreen'
import { navigatePush } from '../actions/actionNavigation'
import * as constants from '../utils/constants'


const mapStateToProps = (state) => {
	return {	
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush(constants.SCREEN_CUSTOMER_INFO))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen)