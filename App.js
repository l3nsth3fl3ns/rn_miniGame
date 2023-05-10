import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constans/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState(null)
    const [gameIsOver, setGameIsOver] = useState(true)
    const [guessedRounds, setGuessedRounds] = useState(0)

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber)
        setGameIsOver(false)
    }

    const gameOverHandler = () => {
        setGameIsOver(true)

    }
    const restartHandler = () => {
        setUserNumber(null)
        setGuessedRounds(0)
    }
    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen
            guessedNumber={userNumber}
            onGameOver={gameOverHandler} />
    }
    if (gameIsOver && userNumber) {
        screen = <GameOverScreen
            restartHandler={restartHandler}
            guessedNumber={userNumber}
            roundsNumber={guessedRounds}/>
    }



    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent400]} style={styles.rootScreen}>
            <ImageBackground source={require("./assets/images/dice.jpg")}
                             resizeMode="cover"
                             style={styles.rootScreen}
                             imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15
    }
})