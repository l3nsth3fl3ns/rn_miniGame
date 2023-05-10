import {Image, StyleSheet, Text, View} from "react-native"
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/primaryButton";

const GameOverScreen = props => {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/ribbon.jpg")}
                    style={styles.image}
                />
            </View>
            <Text>Your phone needed {props.roundsNumber} rounds to guess the number {props.guessedNumber}</Text>

            <PrimaryButton onPress={props.restartHandler} passedStyle={styles.button}>Play Again</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 200,
        width: 200,
        height: 200,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%"
    },
    button: {
        padding: 25
    }
})

export default GameOverScreen