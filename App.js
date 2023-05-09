import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";
import { useState } from "react";
import ButtonGradient from "./components/ButtonGradient";

const { width, height } = Dimensions.get("window");

export default function App() {
  function SvgTop() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={377}
        height={380}
        viewBox="400 0 1500 500"
      >
        <Defs>
          <LinearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
            <Stop offset="0%" stopColor="hsl(37, 99%, 67%)" />
            <Stop offset="100%" stopColor="hsl(316, 73%, 52%)" />
          </LinearGradient>
        </Defs>
        <G fill="url(#a)" transform="translate(7.649 288.514)">
          <Path
            d="M-10 55c64.583 6.667 182.917 44.5 310 32S475-1.458 600-5c125-3.542 175 76.25 300 75s175-92.667 300-81c125 11.667 175 130.75 300 137s175-98.042 300-107c125-8.958 175 63.375 300 64s185.417-136.417 300-61 854.167 230.708 250 423S156.25 840.833-500 945"
            opacity={0.05}
          />
          <Path
            d="M-10 100c64.583 6.667 182.917 44.5 310 32s175-88.458 300-92c125-3.542 175 76.25 300 75s175-92.667 300-81c125 11.667 175 130.75 300 137s175-98.042 300-107c125-8.958 175 63.375 300 64s185.417-136.417 300-61 854.167 230.708 250 423S156.25 885.833-500 990"
            opacity={0.53}
          />
          <Path d="M-10 145c64.583 6.667 182.917 44.5 310 32s175-88.458 300-92c125-3.542 175 76.25 300 75s175-92.667 300-81c125 11.667 175 130.75 300 137s175-98.042 300-107c125-8.958 175 63.375 300 64s185.417-136.417 300-61 854.167 230.708 250 423S156.25 930.833-500 1035" />
        </G>
      </Svg>
    );
  }

  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
  };

  const handleRelease = () => {
    setPressed(false);
  };

  const forgotPassword = [
    styles.textPass, pressed && styles.textPressed
  ]
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>EasyTalk</Text>
        <Text style={styles.subtitulo}>Sign in to your account</Text>
        <TextInput style={styles.textInput} placeholder="jhon@gmail.com" keyboardType="email-address" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <TouchableHighlight onPressIn={handlePress} onPressOut={handleRelease} underlayColor={'transparent'}>
          <Text style={forgotPassword}>Forgot your password?</Text>
        </TouchableHighlight>
        <ButtonGradient />
        <Text style={styles.noAccount}>
          Don't have an account? <Text style={styles.textCreate}> Create</Text>
        </Text>
        <Text style={styles.footer}>Created by Bagse ¬¬</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#141414",
    flex: 1,
  },
  container: {
    marginTop: -180,
    alignItems: "center",
    justifyContent: "center",
  },
  containerSVG: {
    width: width,
    justifyContent: "flex-start",
    alignItems: "center",
    transform: [{ rotate: "180deg" }],
  },
  titulo: {
    fontSize: 85,
    color: "#f1f1f1",
    fontWeight: "bold",
  },
  subtitulo: {
    color: "gray",
    fontSize: 20,
  },
  textInput: {
    backgroundColor: "#fff",
    padding: 10,
    paddingStart: 26,
    width: "80%",
    marginTop: 20,
    borderRadius: 30,
    height: 50,
    fontWeight: "bold",
    fontSize: 16
  },
  textPass: {
    fontSize: 14,
    marginTop: 20,
    textDecorationLine: 'none',
    color: 'grey',
    fontWeight: "bold",
  },
  textPressed: {
    color: "#fff",
    textDecorationLine: 'underline',
  },
  noAccount: {
    fontSize: 14,
    color: "grey",
    fontWeight: "bold",
    marginTop: 30,
  },
  textCreate: {
    fontWeight: "bold",
    color: "white",
  },
  footer: {
    fontSize: 12,
    marginTop: 100,
    color: 'orange',
    alignContent: 'center',
  }
});
