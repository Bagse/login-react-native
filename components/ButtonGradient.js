import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonGradient() {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={["hsl(37, 99%, 67%)", "hsl(316, 73%, 52%)"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.button}
      >
        <Text style={styles.text}>SIGN IN</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 200,
    marginTop: 50,
  },
  text: {
    fontSize: 14,
    color: "#f1f1f1",
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});