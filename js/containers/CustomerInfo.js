import {connect} from 'react-redux'
import CustomerInfoScreen from '../components/CustomerInfoScreen'
import {navigatePush} from '../actions/actionNavigation'
import * as constants from '../utils/constants'


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonPress: () => {
            dispatch(navigatePush(constants.SCREEN_CHOOSE_PRODUCTS))
        },
        onModalButtonPress: () => {
            dispatch(navigatePush(constants.SCREEN_MODAL))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerInfoScreen)