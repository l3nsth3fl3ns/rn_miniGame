import {View, TextInput, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/primaryButton";
import {useState} from "react"
import Colors from "../constans/colors";
import Title from "../components/ui/Title";

const StartGameScreen = props => {
    const [enteredNumber, setEnteredNumber] = useState("")

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)

    }

    const resetInputHandler = () => setEnteredNumber("")

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert
            Alert.alert("Invalid Number", "Number has to be from 1 to 99",
                [{text: "Okay", style: "destructive", onPress: resetInputHandler}])
            return;
        }
        props.onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <View style={styles.startGameScreen}>
                <TextInput
                    style={styles.numberInput}
                    placeholder='Enter A Number'
                    maxLength={2}
                    keyboardType={"number-pad"}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center"
    },
    startGameScreen: {
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary500,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: "center",
    },
    numberInput: {
        textAlign: "center",
        height: 50,
        fontSize: 32,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        color: "black",
        marginVertical: 8,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row"
    }
})

export default StartGameScreen