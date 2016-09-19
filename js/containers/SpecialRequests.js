import { connect } from 'react-redux'
import SpecialRequestsScreen from '../components/SpecialRequestsScreen'
import { navigatePush } from '../actions/actionNavigation'
import * as constants from '../utils/constants'

const mapStateToProps = (state) => {
	return {
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush(constants.SCREEN_ORDER_COMPLETED))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SpecialRequestsScreen)