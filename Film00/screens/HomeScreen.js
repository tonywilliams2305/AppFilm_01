import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Header/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})