import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {MoviesCards} from '../Context'

const TheatreScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {seats, setSeats, occupied} = useContext(MoviesCards);
  const onSeatSelect = (item) => {
    const seatSeleted = seats.find((seat) => seat === item);
    if (seatSeleted) {
      setSeats(seats.filter((seat) => seat !== item))
    }else {
      setSeats([...seats, item])
    }
  }

  const showSeats = () => {
    return (
      <View style={{flexDirection:"row", alignItems:"center"}}>
        {
          seats.map((seat, index) => (
      
            <Text style={{paddingHorizontal: 2}}>{seat}</Text>
         
          
        ))
        }
      </View>
      
    )
    
  }

  const fee = 87;
  const noOfSeats = seats.length;
  const total = seats.length > 0 ? (fee + noOfSeats * 50000) : 0;
  
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
          <View style={{ marinLeft: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>{route.params.name}</Text>
            <Text style={{ marginTop: 4, color: "gray", fontSize: 15, fontWeight: 500 }}>{route.params.mall}</Text>
          </View>

        </View>
        <AntDesign name="sharealt" size={24} color="black" />
      </View>


      <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", marginTop: 10 }}>{route.params.timeSelected}</Text>

      <Text style={{ textAlign: "center", fontSize: 12, color: "gray", fontWeight: "bold", marginTop: 10 }}>CLASSIC</Text>
      <View style={{ marginTop: 20 }} />
      <FlatList numColumns={7} data={route.params.tableSeats} renderItem={({ item }) => (
        <Pressable onPress={() => onSeatSelect(item)} style={{ borderWidth: 1, margin: 5, borderColor: "black", borderRadius: 5, marginVertical: 10 }}
        >
          {
            seats.includes(item) ? (
              <Text style={{backgroundColor: "yellow", padding: 10}}>{item}</Text>
            ) : 
              occupied.includes(item) ? (
                <Text style={{backgroundColor: "#989898", padding: 10}}>{item}</Text>
              ) : (
                <Text style={{ padding: 10}}>{item}</Text>
              )
            
          }


          
        </Pressable>
      )} />
      <View style={{ borderWidth: 1, padding: 10, marginTop: 10, flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <FontAwesome style={{ textAlign: "center" }} name="square" size={24} color="yellow" />
          <Text>Đã chọn</Text>
        </View>

        <View>
          <FontAwesome style={{ textAlign: "center" }} name="square" size={24} color="white" />
          <Text>Còn trống</Text>
        </View>

        <View>
          <FontAwesome style={{ textAlign: "center" }} name="square" size={24} color="red" />
          <Text>Đã hết chỗ</Text>
        </View>
      </View>

      <View style={{padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View >
          <Text style={{fontWeight: "600" }}>show end tome approax 6:51pm</Text>
          {seats.length > 0 ? (
            showSeats()
          ) : (
            <Text>Chưa chọn chỗ ngồi</Text>
          )}
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{backgroundColor:"#e0e0e0",width: 100}}>Now with ticket cancellation</Text>
        </View>
      </View>

      <Pressable onPress={() => {
        occupied.push(...seats)
        navigation.navigate("Ticket",{
          name: route.params.name,
          mall:route.params.mall,
          timeSelected:route.params.timeSelected,
          total: total,
          image: route.params.image,
          date:route.params.date
        }
        )


        setSeats([])
      }} style={{backgroundColor: "green", padding: 10, justifyContent:"space-between", flexDirection:"row"}}>
        {seats.length > 0 ? (
          <Text>Đã chọn {seats.length} chỗ ngồi</Text>
        ) : (
          <Text></Text>
        )}
        <Text style={{fontSize: 18}}>Thanh toán {total} VNĐ</Text>

      </Pressable>
    </SafeAreaView>
  )
}

export default TheatreScreen