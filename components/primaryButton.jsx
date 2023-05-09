import {View, Text} from "react-native";

const primaryButton = props => {
    return(
        <View>
        <Text>{props.children}</Text>
    </View>)
}

export default primaryButton