import {View, Text} from 'react-native';
import React, {Component} from 'react';
import { WebView } from 'react-native-webview';


export default function TopRestaurants(){
    return (
        <WebView source={{ uri: 'https://192.168.1.12/qr/' }} />   
    )
}