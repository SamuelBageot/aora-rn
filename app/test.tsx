import { StyleSheet, Text, View } from "react-native"

const Test = () => {
    return (
        <View style={styles.container}>
            <Text>AHAH</Text>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    container: {
    //   borderWidth: 1,
    //   borderColor: 'red',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })