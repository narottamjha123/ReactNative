import React, { createContext, useState } from 'react';
import {Text , View , Image, Button, TextInput, StyleSheet, TouchableHighlight, Pressable} from 'react-native'
import { useSelector } from 'react-redux';
import { reducer } from './Redux/reducer';

const UserData = (props : any) => {
    const cartData = useSelector((state : any) => state.reducer);
    console.log(cartData);
    const [name,setName] = useState(cartData  && cartData.length > 0 ? cartData[0].BudgetName : "School");
    const [Amount , setAmount] = useState(cartData  && cartData.length > 0 ? cartData[0].Amount : 100);
    const [ActualAmount , setActualAmount] = useState(cartData  && cartData.length > 0 ? cartData[0].ActualAmount : 1000);
    const [index , setIndex] = useState(0);
    // console.warn(cartData.length);

    const prev = () => {
        let data = cartData;
             if(data && data.length > 0 && index > 0)
             {
                        setName(cartData[index-1].BudgetName);
                        setAmount(cartData[index-1].Amount);
                        setActualAmount(cartData[index-1].ActualAmount);
                        setIndex(index-1);
             }
       }

          const next = () => {

            let data = cartData;
            if(cartData && (cartData.length-1 > index))
            {
                       setName(cartData[index+1].BudgetName);
                       setAmount(cartData[index+1].Amount);
                       setActualAmount(cartData[index+1].ActualAmount);
                       setIndex(index+1);
            }
   
           }
    const item = {...props}
           return (
               <View>
                  <View style = {{alignItems : 'center', margin : 60 , backgroundColor: 'gray', borderWidth : 5, borderRadius : 30}}>
                          

                          <View style={[styles.dialogContentView,styles.box]}>
                                <Text style = {{ fontSize : 20  , color : 'white' , fontWeight: "bold"}}>Budget Itlem</Text>

                               <Text style = {{fontSize : 20 , fontWeight: "bold", marginLeft : 30}}>{name}</Text>
                           </View>   

                           <View style={styles.dialogContentView}>
                                <Text style = {{ fontSize : 20  , color : 'white' , fontWeight: "bold"}}>Planned Amount</Text>

                               <Text style = {{fontSize : 20 , fontWeight: "bold" , marginLeft : 30}}>{Amount}</Text>
                           </View>   


                          <View style={styles.dialogContentView}>
                                <Text style = {{ fontSize : 20  , color : 'white' , fontWeight: "bold"}}>Planned Amount</Text>

                               <Text style = {{fontSize : 20 , fontWeight: "bold" , marginLeft : 30}}>{ActualAmount}</Text>
                           </View>   


                              <View style={styles.dialogContentView}>
                      <TouchableHighlight disabled>
                                 <Text style = { [styles.button, styles.prev]} onPress={prev}>Prev</Text>
                     </TouchableHighlight> 

                      <TouchableHighlight disabled>
                               <Text style = { [styles.button, styles.next] } onPress={next}>Next</Text>
                       </TouchableHighlight> 

                       <TouchableHighlight disabled>
                               <Text style = { [styles.button, styles.next] } onPress={props.updateEnable}>Add More Data</Text>
                       </TouchableHighlight> 


  
              </View>  
                  </View>
                  </View>
           );
 }
 const styles = StyleSheet.create({

    box : {
        // marginTop : 250,
        // marginLeft: 40
        // borderColor : 'red',
        // borderWidth: 1,
        // borderLeftWidth: 10
    },
    textINput : {
        width: 50,
        height: 50,
        marginTop: 150,
        marginLeft: 310,
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'red'
    },
    text : {
      fontSize: 18,
      color : 'blue',
      borderColor : '',
      borderWidth: 2,
      margin : 10
  },
      button:{
        backgroundColor : "#bbb",
        color : "black",
        fontSize: 10,
        textAlign: 'center',
        padding: 10,
        margin : 10,
        borderRadius: 10,
        shadowColor : 'red',
        elevation : 10,
        shadowOpacity : 1,
      },
      prev : { color : 'black' , backgroundColor : 'white',  fontWeight: "bold" , fontSize : 15},
      next : { color : 'black' , backgroundColor : 'white' ,  fontWeight: "bold", fontSize : 15},
      Fav : { color : 'black' , backgroundColor : 'white',  fontWeight: "bold" , fontSize : 15},
      decorateBtn : {
      },
      dialogContentView: {
          flexDirection: 'row',
          marginTop : 50
      },
      topView:{
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 50
      }
  });
 export default UserData;