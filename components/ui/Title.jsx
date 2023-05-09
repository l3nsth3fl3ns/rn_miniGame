import {StyleSheet, Text} from "react-native";
import Colors from "../../constans/colors";

const Title = props => {
    return (
        <Text style={styles.title}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "black",
        textAlign: "center",
    }
})
export default Title