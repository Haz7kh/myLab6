import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';



const Credits = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Information </Text>
            <View style={{borderWidth:2,backgroundColor:"#ffebe6",padding:10}}>
            <Text style={{fontSize:18}}>test app forlabb 6. 
                designied by "Khaled", 
                for contact 
                Email: haz@info.com
                Phone number : 0712345678
            </Text>
            </View>
            
            <View style={styles.btn}>
            <Button 
             title = ' Home '
             color="#ff3300"
             onPress = { ()=>  navigation.popToTop()}
        
        />
            </View>
          
        
        
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#375866",
    },
    btn:{
        height:200,
        width:400,
        marginTop:240,
        justifyContent:"center",
        alignContent:"center"
    },
    TextDef:{
        fontSize:18,
       
    }
});
export default Credits;