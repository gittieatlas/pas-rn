import {StyleSheet, Dimensions} from 'react-native';
import * as colors from './colors';

export default styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colors.windowBackground,
    },
    container: {
        flex: 1,
        backgroundColor: colors.windowBackground,
        paddingTop: 66, // add margin the height of nav bar
        paddingHorizontal: 8,
    },
    formElement: {
        marginBottom: 16,
    },
    caption: {
        fontSize: 12,
        color: colors.darkTextSecondary,
    },
    body2: {
        fontSize: 14,
        color: colors.darkTextPrimary,
        paddingBottom: 12,
    },
    listSubtitle: {
        fontSize: 14,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        marginTop: 8,
        color: colors.darkTextSecondary,
    },
    title: {
        fontSize: 14,
        color: colors.darkTextPrimary,
        paddingBottom: 8,
    },
    message: {
        fontSize: 14,
        margin: 16,
        textAlign: 'center',
        flex: 1,
    },
    multilineWithFontStyles: {
        color: colors.logoBlue,
        fontSize: 18,
        height: (Dimensions.get('window').height) / 4,
    },
    textInput: {
        color: colors.logoBlue,
        fontSize: 18,
        width: 50,
        height: 50,
    },
    multiline: {
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        flex: 1,
        fontSize: 13,
        height: 50,
        padding: 4,
        marginBottom: 4,
    },
});
