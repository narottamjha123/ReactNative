import React, { createContext, useState } from 'react';
import {Text , View , Image, Button, TextInput, StyleSheet, TouchableHighlight} from 'react-native'
import {addToList} from './Redux/action'
import { useDispatch } from 'react-redux';

const CreateContact = (props : any) =>{
    const [BudgetName,setName] = useState("");
    const [Amount,setAmount] = useState("");
    const [ActualAmount,setActualAmount] = useState("");
    const [enable,setEnable] = useState(true);
    const [Data,setData] = useState({});

     const Dispatch = useDispatch()
    const check = ()=> {
               if(Amount && Amount.length > 0 && BudgetName  && BudgetName.length > 0 && ActualAmount && ActualAmount.length > 0)
               {
                        return true;
               }
               return false;
    }
    const handleToCart = (data : any) => {
            Dispatch(addToList(data));
                        props.submit();
    }
    
    return (
    <View>

        <Text style = {{ fontSize : 20 , marginLeft : 10}}>BudgetName of item</Text>
        <TextInput style = {styles.textINput}
        placeholder = "Enter Your BudgetName"
        onChangeText={(text) => setName(text)}
       />
          <Text style = {{ fontSize :  20 , marginLeft : 10}}>Planned Amount</Text>
        <TextInput style = {styles.textINput}
        placeholder = "Enter Amount Number"
        onChangeText={(text) => setAmount(text)}
       />

        <Text style = {{ fontSize :  20 , marginLeft : 10}}>Actual Amount</Text>
        <TextInput style = {styles.textINput}
        placeholder = "Enter Amount Number"
        onChangeText={(text) => setActualAmount(text)}
       />
   
      <TouchableHighlight disabled = {check() ? true : false}>
      <Text style = {check() ? [styles.button, styles.success] : styles. button} onPress={() => handleToCart({BudgetName : BudgetName , Amount : Amount , ActualAmount : ActualAmount})}>Submit</Text>
       </TouchableHighlight> 

    </View>
    );
}


const styles = StyleSheet.create({
    textINput : {
        fontSize: 18,
        color : 'blue',
        borderColor : '',
        borderWidth: 2,
        margin : 10
        
    },
    main : {
          flex : 1,
    },
    button:{
      backgroundColor : "#bbb",
      color : "black",
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      margin : 10,
      borderRadius: 10,
      shadowColor : 'red',
      elevation : 10,
      shadowOpacity : 1,
    },
    success : { color : 'black' , backgroundColor : 'green'}
    
  });

export default CreateContact