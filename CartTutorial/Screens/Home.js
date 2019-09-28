//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, FlatList, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
// create a component
class Home extends Component {
    constructor() {
        super()
        this.state = {
            items: [{ id: 1, price: "12000", product_name: "Samsung Galaxy Tab A 10.1", image: "https://m.media-amazon.com/images/I/71dFS-MGE9L._AC_UY218_.jpg" },{ id: 2, price: "8000", product_name: "Samsung Galaxy M20", image: "https://m.media-amazon.com/images/I/61nzw1i2taL._AC_UY218_.jpg" }, { id: 3, price: "600", product_name: "Samsung Pro 32GB", image: "https://m.media-amazon.com/images/I/41OcqEvr1QL._AC_UY218_.jpg" }]
        }
    }

    addCart(items){
        ToastAndroid.show('Added to Cart', ToastAndroid.SHORT);
        this.props.addItemToCart(items)
      }

    render() {
        return (
            <View style={styles.container}>

                   <FlatList
                       showsVerticalScrollIndicator={false}
                       data={this.state.items}
                       keyExtractor={(item, index) => index.toString()}
                       renderItem={({ item: rowData })  => {
                           return (
                              <View style={{flex: 1, width: 100, height: 280, justifyContent: 'center', alignItems: 'center'}}>
                               <Image
                               resizeMethod='resize' resizeMode='stretch'  
                               style={{ height: 130, width: 70, borderRadius: 8, margin: 2}}
                                   source={{ uri: rowData.image}}
                               />
                               <Text type="semibold" style={{fontSize: 11, textAlign: 'center', color:'#808080'}}>{rowData.product_name}</Text>
                               <Text>Rs. {rowData.price}</Text>
                               <TouchableOpacity style={{ backgroundColor: 'green',  justifyContent: 'center', alignItems: 'center', width: 120,  marginTop: 3}} onPress={() => this.addCart(rowData)}>
                               <Text style={{color: 'white', alignItems: 'center'}}>Add</Text>
                               </TouchableOpacity>
                               </View>
                       );
                       }}
                       />
            </View>
        );
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
export default connect(mapStateToProps, {addItemToCart: (product) => ({ type: 'ADD_CART', payload: product }) })(Home);
