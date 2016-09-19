import React, {PropTypes} from 'react'
import {NavigationExperimental, View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import Home from './Home'
import CustomerInfo from './CustomerInfo'
import ChooseProducts from './ChooseProducts'
import SpecialRequests from './SpecialRequests'
import OrderCompleted from './OrderCompleted'
import Modal from './Modal'
import { navigatePop } from '../actions/actionNavigation'
import * as colors from '../styles/colors';
import styles from '../styles/globalStyles'
import * as constants from '../utils/constants'

const {
	Transitioner: NavigationTransitioner,
	Card: NavigationCard,
	Header: NavigationHeader
} = NavigationExperimental;


class AppContainer extends React.Component {
	render() {
		let { navigationState, backAction } = this.props;

		return (

			// Redux is handling the reduction of our state for us. We grab the navigationState 
			// we have in our Redux store and pass it directly to the <NavigationTransitioner />.
			<NavigationTransitioner
				navigationState={navigationState}
				style={styles.appContainer}
				render={props => (
					// This mimics the same type of work done in a NavigationCardStack component
					<View style={styles.appContainer}>
						<NavigationCard
							// <NavigationTransitioner>'s render method passes `navigationState` as a 
							// prop to here, so we expand it plus other props out in <NavigationCard>.
							{...props}
							// Transition animations are determined by the StyleInterpolators. Here we manually
							// override the default horizontal style interpolator that gets applied inside of 
							// NavigationCard for a vertical direction animation if we are showing a modal.
							// (Passing undefined causes the default interpolator to be used in NavigationCard.)
							style={props.scene.route.key === constants.SCREEN_MODAL ?
										NavigationCard.CardStackStyleInterpolator.forVertical(props) :
										undefined
							}
							onNavigateBack={backAction}
							// By default a user can swipe back to pop from the stack. Disable this for modals.
							// Just like for style interpolators, returning undefined lets NavigationCard override it.
							panHandlers={props.scene.route.key === constants.SCREEN_MODAL ? null : undefined }
							renderScene={this._renderScene}
							key={props.scene.route.key}
						/>
						<NavigationHeader
							{...props}
							style={{backgroundColor: colors.logoBlue}}
							onNavigateBack={backAction}
							renderTitleComponent={props => {
								const title = props.scene.route.title;
								return <NavigationHeader.Title>{title}</NavigationHeader.Title>
							}}
							// When dealing with modals you may also want to override renderLeftComponent...
						/>
					</View>
				)}
			/>
		)
	}

	_renderScene({scene}) {
		const { route } = scene;
		
		switch(route.key) {
		case constants.SCREEN_HOME:
			return <Home />;
		case constants.SCREEN_CUSTOMER_INFO:
			return <CustomerInfo />;
		case constants.SCREEN_CHOOSE_PRODUCTS:
			return <ChooseProducts />;
		case constants.SCREEN_SPECIAL_REQUESTS:
			return <SpecialRequests  />;
		case constants.SCREEN_ORDER_COMPLETED:
			return <OrderCompleted  />;
		case constants.SCREEN_MODAL:
			return <Modal />
		}
	}
}

AppContainer.propTypes = {
	navigationState: PropTypes.object,
	backAction: PropTypes.func.isRequired
};

export default connect(
	state => ({
		navigationState: state.navigationState
	}),
	dispatch => ({
		backAction: () => {
			dispatch(navigatePop())
		}
	})
)(AppContainer)