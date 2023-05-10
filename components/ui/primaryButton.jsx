import {View, Text, StyleSheet, Pressable} from "react-native";
import Colors from "../../constans/colors";

const primaryButton = props => {
    return (
        // pressed will be passed to pressable by RN
        <Pressable style={({pressed}) => pressed ? [styles.pressed,
            styles.container] : [styles.container, props.passedStyle]} onPress={props.onPress}>
            <View>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </Pressable>)

}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginHorizontal: 10,
        backgroundColor: Colors.primary600,
        borderRadius: 8,
        padding: 8,
        width: 100,
        alignItems: "center",
        borderColor: "white",
        borderWidth: 0.5,
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75,
    }
})

export default primaryButton