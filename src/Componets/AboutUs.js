import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';



const AboutUs = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30,fontWeight:"bold"}}>About UsS</Text>
            <Text style={styles.TextDef}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including
                 versions of Lorem Ipsum.</Text>
                 <View style={styles.btn}>
                 <Button 
                  title = ' Home '
                  color="#ff3300"
                 onPress = { ()=>  navigation.navigate("Home")}
        
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
    TextDef:{
        fontSize:18,
        
    },
    btn:{
        height:200,
        width:400,
        justifyContent:"center",
        alignContent:"center"
    }
});
export default AboutUs;