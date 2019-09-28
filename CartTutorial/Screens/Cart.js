//import liraries
import React, { Component } from 'react';
import { View, FlatList, Image, ScrollView,Text, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
// create a component
class Cart extends Component {
    render() {
        if(this.props.cartItem.length === 0 || this.props.cartItem === undefined){
            return (
                <View style={styles.container}>
                    <Text>No item(s) in cart</Text>
                </View>
            );
        }else{
            return (
                <ScrollView showsVerticalScrollIndicator={false}>
                <View  style={{ paddingTop: 54, flex: 1}}>
                  {
                    
                   this.props.cartItem.map((citem, index) =>
                     (
                     <View key={'mykey' + index}  style={{ borderRadius: 3, marginHorizontal: 12, marginVertical: 4, padding: 4 }} >
                       <View style={{flex: 0.3, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2,}}>
                   <Image resizeMode='stretch' style={{  height: 130, width: 70, marginTop: 2, marginBottom: 2, marginLeft: 5 }} source={{ uri: citem.image }} /><View style={{ marginTop: 3, marginBottom: 3, flex: 0.6, flexDirection: 'column',  alignItems: 'flex-start', justifyContent: 'space-between'}}>
                           <View style={{ alignItems:'flex-start'}}> 
                             <Text style={{fontSize: 15}}>{citem.product_name}</Text>
                             <Text style={{fontSize: 13, marginTop: 2,color:'#808080'}}>₹ {citem.price}</Text>
                           </View>  
                         </View>
                         <TouchableOpacity style={{ marginRight: 4, flex: 0.1, flexDirection: 'row', alignItems:'center' }} onPress={()=>this.props.removeItem(citem)}>
                           <Icon name='md-remove-circle' size={20} style={{ marginLeft: 4}}  />
                         </TouchableOpacity>
                       </View>  
                     </View>
                   )
                   )
                 }
                 </View>
                 </ScrollView>
            );
        }
       
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});


const mapStateToProps = (state) => {
     return {
         cartItem: state.cartItems.cartData
     }
   }
   const mapDispatchToProps = (dispatch) => {
     return {
         removeItem: (product) => dispatch({ type: 'REMOVE_CART', payload: product })
     }
   }
   
   export default connect(mapStateToProps, mapDispatchToProps)(Cart);