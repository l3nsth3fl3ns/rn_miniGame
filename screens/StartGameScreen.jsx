import {View, TextInput, StyleSheet} from "react-native";
import PrimaryButton from "../components/primaryButton";

const StartGameScreen = () => {
    return (<View style={styles.startGameScreen}>
            <TextInput placeholder='Uselesse'/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    startGameScreen: {
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#4E3A91',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})

export default StartGameScreen