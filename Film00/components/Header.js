import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <ImageBackground
        style={{ aspectRatio: 5 / 2, height: 170}}
        source={{
          uri: 'https://cdn.tgdd.vn/Files/2019/05/04/1164811/collage_fotor_1280x719-800-resize.jpg',
        }}
      >
        <Pressable style={{position: "absolute", height: 130, backgroundColor: "white", padding: 10, borderRadius: 6, top: 140, left: 42, width: "80%"}}>
          <Text>Releasing in 1 days</Text>
          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <View>
              <Text>Title</Text>
              <Text>Description</Text>
            </View>
          </View>
          <Pressable>
            <Text>BOOK</Text>
          </Pressable>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})