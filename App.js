import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  SafeAreaView,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      resultValue: '0.0',
    };
  }

  btnpressed = (currency) =>{
    if(this.state.inputValue==="")
    {
      return Alert.alert("Enter some value")
    }
    let result =  parseFloat(this.state.inputValue) * currencyPerRupee[currency]
    this.setState({resultValue: result.toFixed(2)})
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss} >
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}> {this.state.resultValue} </Text>
          </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            selectionColor="white"
            placeholder="Enter amount (in Rupees)"
            placeholderTextColor="white"
            value={this.state.inputValue}
            onChangeText={(inputValue) => this.setState({ inputValue })}
          />
        </View>
        <View style={styles.buttonconvertercontainer}>

          <TouchableOpacity 
          onPress = {()=> this.btnpressed("DOLLAR")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}> Dollar </Text>
          </TouchableOpacity>

           <TouchableOpacity
          onPress = {()=> this.btnpressed("EURO")}           
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}> Euro </Text>
          </TouchableOpacity>

           <TouchableOpacity 
          onPress = {()=> this.btnpressed("POUND")}           
           style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}> Pound </Text>
          </TouchableOpacity>

           <TouchableOpacity
          onPress = {()=> this.btnpressed("RUBEL")}           
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}> Rubel </Text>
          </TouchableOpacity>

           <TouchableOpacity 
          onPress = {()=> this.btnpressed("AUSDOLLAR")}           
           style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}> Aus Dol </Text>
          </TouchableOpacity>

           <TouchableOpacity 
          onPress = {()=> this.btnpressed("CANDOLLAR")}                      
           style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}> Can Dol </Text>
          </TouchableOpacity>

            <TouchableOpacity 
          onPress = {()=> this.btnpressed("YEN")}                       
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}> Yen </Text>
          </TouchableOpacity>

            <TouchableOpacity 
          onPress = {()=> this.btnpressed("DINAR")}                       
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}> dinar </Text>
          </TouchableOpacity>

            <TouchableOpacity 
          onPress = {()=> this.btnpressed("BITCOIN")}                       
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}> Bitcoin </Text>
          </TouchableOpacity>
         
        </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 20,
    // justifyContent: 'center',
  },
  screenview: {
    flex: 1,
    
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    borderColor: '#c1c1c1',
    backgroundColor: '#0A79DE',
    alignItems: 'center',
    borderWidth: 2,
    marginLeft:20,
    marginRight:20,
    borderRadius:10
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    marginBottom: 450,
    height: 70,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c1c1c1',
    backgroundColor: '#0A79DE',
    marginLeft:20,
    marginRight:20,
    borderRadius:10
  },
  input: {
    fontSize: 20,
    color: 'white',
  },
  buttonconvertercontainer: {
    borderColor: '#c1c1c1',
    flexWrap:"wrap",
    flexDirection: "row",
    borderWidth: 2,
    marginTop : -400,
    marginLeft:20,
    marginRight:20,
    borderRadius:5
  },

  converterbutton: {
    alignItems: 'center',
    borderColor: '#c1c1c1',
    justifyContent: 'center',
    backgroundColor: '#0A79DF',
    height: 100,
    borderWidth: 2,
    width: '33.33%',
    flexDirection : "row"
   
    
  },

  converterbuttontext: {
    borderColor: 'c1c1c1',
    backgroundColor: '#0A79DE',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});
