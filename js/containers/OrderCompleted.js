import { connect } from 'react-redux'
import OrderCompletedScreen from '../components/OrderCompletedScreen'
import { navigateReset } from '../actions/actionNavigation'
import * as constants from '../utils/constants'

const mapStateToProps = (state) => {
	return {
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigateReset([{ key: constants.SCREEN_HOME, title: constants.SCREEN_HOME }], 0))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderCompletedScreen)