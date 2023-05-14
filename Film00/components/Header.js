import { StyleSheet, Text, View, ImageBackground, Pressable, ScrollView } from 'react-native'
import React from 'react'


const Header = () => {

  const types = [
    {
      id: 0,
      name: "IMAX",
    },
    {
      id: 1,
      name: "4DX"
    },
    {
      id: 2,
      name: "PXL"
    },
    {
      id: 3,
      name: "GOLD",
    },
    {
      id: 4,
      name: "PLAYHOUSE"
    }
  ];

  return (
    <View>
      <ImageBackground
        style={{ aspectRatio: 5 / 2, height: 170 }}
        source={{
          uri: 'https://cdn.tgdd.vn/Files/2019/05/04/1164811/collage_fotor_1280x719-800-resize.jpg',
        }}
      >
        <Pressable style={{ position: "absolute", height: 130, backgroundColor: "white", padding: 10, borderRadius: 6, top: 140, left: 30 ,width: "85%" }}>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>Releasing in 1 days</Text>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" ,marginTop: 10}}>

            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Title</Text>
              <Text style={{ fontSize: 16, fontWeight: "400", color: "gray", marginTop: 4 }}>Description</Text>
            </View>

            <Pressable style={{backgroundColor:"yellow",padding:10,borderRadius:6}}>
              <Text style={{fontSize: 14, fontWeight:500,textAlign:"center"}}>BOOK</Text>
            </Pressable>
          </View>
          <Text style={{marginTop:8, fontSize: 15}}>Type of film</Text>
        </Pressable>
      </ImageBackground>
      
      <View style={{marginTop: 100}}/>
      <ScrollView showsHorizontalScrollIndicator="false" horizontal="true">
        {types.map((item, index) => (
          <View style={{margin: 10, borderColor:"C0C0C0", borderWidth: 1, borderRadius: 4, padding: 10}} key={index}>
            <Text style={{fontWeight:500, textAlign: 'center'}}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
