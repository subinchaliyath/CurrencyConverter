import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const currancyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(null);
  const [resultValue, setResultValue] = useState(0);
  const handlePress=(currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text: 'Please Enter a Value',
        backgroundColor: '#EA7773',
        textColor:'#000'
      });
    }
    setResultValue(parseFloat(inputValue)*currancyPerRupee[currency])
    setInputValue(null)
  }
  return (
    <>
      <ScrollView keyboardShouldPersistTaps='handled' contentInsetAdjustmentBehavior='automatic'>
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              value={inputValue}
              onChangeText={(e)=>setInputValue(e)}
              >
            </TextInput>
          </View>
          <View style={styles.convertButtonContainer}>
{Object.keys(currancyPerRupee).map(currency=>(
  <TouchableOpacity key={currency} style={styles.coverterButton} onPress={()=>handlePress(currency)}>
    <Text style={styles.coverterButtonText}>{currency}</Text>
  </TouchableOpacity>
))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },

  resultValue: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
  },
  convertButtonContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10
  },
  coverterButtonText:{
    color:'#fff',
    fontSize:15
  },
  coverterButton:{
    height:100,
    width:'33.3%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    borderWidth:2,
    backgroundColor:'aqua'

  }
});
