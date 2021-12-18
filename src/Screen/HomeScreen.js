import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';





const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>

            <Image
            style= {styles.IMG}
        source={{
          uri: 'https://nordicdairycongress.com/sites/default/files/billeder/nyheder/colourbox15033372.jpg',
        }}
      />
      
        
<View style={styles.btn}>
<Button 

        title = 'Go till About Us'
        onPress = { ()=>  navigation.navigate("Aboutus")}
        color= "#ff3300"
        />
<View style={{marginTop:10}}>
     <Button 

title = 'Go till Credits '
onPress = { ()=>  navigation.navigate("CreditsM")}
color="#ff3300"
/></View>

</View>



        </View>
        
       
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        backgroundColor: "#375866",
    },
    IMG : {
        height:100,
        width:450,
        marginTop:150
    },
    btn:{
        height:100,
        width:400,
        marginTop:240,
        // padding:10,
        justifyContent:"center",
        alignContent:"center"
    }
});

export default HomeScreen;