import React from 'react'
import { Text, AppRegistry, View } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

const App = (props) => (
    <View>
        <Header title={'Albums'}/>
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);