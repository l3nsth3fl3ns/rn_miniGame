import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import {useState, useEffect} from "react";
import Ionicons from "@expo/vector-icons/Ionicons"


import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/primaryButton";
import Colors from "../constans/colors";

let minBoundary = 1
let maxBoundary = 100
const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}


const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.guessedNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === props.guessedNumber) {
            props.onGameOver()
            minBoundary = 1
            maxBoundary = 100
        }
    }, [currentGuess, props.guessedNumber, props.onGameOver]);


    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    const nextGuessHandler = (direction) => { // direction => lower, greater
        if (
            (direction === "lower" && currentGuess < props.guessedNumber) ||
            (direction === "greater" && currentGuess > props.guessedNumber)
        ) {
            Alert.alert("Don't lie!", "This is wrong!", [{text: "Sorry!", style: "cancel"}])
            return;
        }
        if (direction === "lower") {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndNmbr = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNmbr)
        setGuessRounds(prevGuess => [newRndNmbr, ...prevGuess])
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.container}>
                <Text style={styles.text}>Higher Or Lower?</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                        <Ionicons name="md-remove" size={24}/>
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                        <Ionicons name="md-add" size={24}/>
                    </PrimaryButton>
                </View>
            </View>
            <View style={styles.listContainer}>
                {/*{guessRounds.map(guessRound =>
                        <Text
                            key={guessRound}>
                            {guessRound}
                        </Text>
                    )}*/}
                <FlatList
                    keyExtractor={(item) => item}
                    data={guessRounds}
                    renderItem={(itemData) => {
                        return (
                            <Text style={styles.listItem}>
                                {itemData.item}
                            </Text>
                        )
                    }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 18,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row"
    },
    container: {
        alignItems: "center",
        backgroundColor: Colors.primary500,
        padding: 10,
        borderRadius: 8,
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
    },
    listContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    listItem: {
        backgroundColor: "yellow",
        width: 100,
        textAlign: "center",
        padding: 10,
        margin: 10,
        fontWeight: "bold",
        borderColor: "black",
        borderWidth: 1,

    }
})

export default GameScreen
