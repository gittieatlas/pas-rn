import React, {PropTypes} from 'react'
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native'
import {Button} from 'react-native-elements'
import * as colors from '../styles/colors';
import styles from '../styles/globalStyles'

const SpecialRequestsScreen = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                multiline={true}
                autoFocus={true}
                style={styles.multilineWithFontStyles}
            />
            <Button
                title='PLACE ORDER'
                onPress={props.onButtonPress}
                backgroundColor={colors.logoBlue}
                style={{flex: 1}}/>
        </View>
    )
};

SpecialRequestsScreen.propTypes = {
    onButtonPress: PropTypes.func.isRequired
};

export default SpecialRequestsScreen