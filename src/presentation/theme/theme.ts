import { StyleSheet } from "react-native"

export const globalColors = {
    primary: '#7037eb',
    secondary: '#f72585',
    backGround: '#fff'
    
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.backGround
    },

    primaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        color: globalColors.backGround,
        fontSize: 18
    }
})