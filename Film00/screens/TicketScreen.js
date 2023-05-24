import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import React, {useContext, useEffect} from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { useNavigation, useRoute } from '@react-navigation/native'
import moment from 'moment'
import { MoviesCards } from '../Context'

const TicketScreen = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const {ticket} = useContext(MoviesCards);
  const ticketDetails = route.params;
  useEffect(() => {
     const loadTicket = () => {
      ticket.push(ticketDetails);
     }
     loadTicket();
  }, [])
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", height: "90%", margin: 10, borderRadius: 6 }}>
        <View style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, fontWeight: 500 }}>{route.params.name}</Text>
          <Text>{route.params.selectedSeats.length}</Text>
          {/* {route.params.selectedSeats.map((item, index) => (
            <Text>{item}</Text>
          ))} */}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text style={{ fontSize: 16, color: "gray" }}>VIETNAM - 2D</Text>

          <Text style={{ color: "red", fontSize: 16 }}>Vé thường</Text>
        </View>

        <Text style={{ fontSize: 15, fontWeight: 600, marginHorizontal: 10, marginTop: 9 }}>{route.params.mall}</Text>

        <Text style={{ textDecorationStyle: "dashed", height: 1, borderWidth: 0.7, marginTop: 10 }} />

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{ color: "gray", fontSize: 15, fontWeight: 500 }}>Thời gian</Text>
            <Text style={{ marginVertical: 4, fontSize: 16 }}>{route.params.timeSelected}</Text>
            <Text>{moment(route.params.date).utc().format("MM/DD/YYYY")}</Text>
          </View>

          <Image style={{ aspectRatio: 4 / 2, height: 60, borderRadius: 6 }} source={{ uri: route.params.image }} />
        </View>

        <Text style={{ textDecorationStyle: "dashed", height: 1, borderWidth: 0.7, marginTop: 10 }} />

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
          

          <View>
            <Text>Vé</Text>
            <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}>{route.params.selectedSeats.length}</Text>
          </View>

          <View>
            <Text>Chỗ ngồi</Text>
            <View style={{ flexDirection: "row" }}>
              {route.params.selectedSeats.map((item, index) => (
                <Text style={{ margin: 3, fontSize: 15, fontWeight: "bold" }}>{item}</Text>
              ))}
            </View>
          </View>
        </View>

        <Text style={{ textDecorationStyle: "dashed", height: 1, borderWidth: 0.7, marginTop: 10 }} />


        <View style={{ height: 140, backgroundColor: "#2989CC", margin: 10, borderRadius: 10 }}>
          <View style={{padding: 10}}>
            <Text style={{fontSize: 18, fontWeight: 500}}>Chi tiết hoá đơn</Text>
            <View style={{marginTop: 10,flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <Text>Giá ghế</Text>
              <Text>{route.params.priceValue*10*10}</Text>
            </View>

            <View style={{marginTop: 10,flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <Text>Phụ thu</Text>
              <Text>{500*10*10}</Text>
            </View>

            <View style={{marginTop: 10,flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <Text>Tổng tiền</Text>
              <Text>{route.params.total*10*10}</Text>
            </View>
          </View>
        </View>

        <Pressable onPress={() => navigation.navigate("Home")} style={{backgroundColor: "#2989CC", marginLeft: "auto", marginRight: "auto", width: 100, borderRadius: 4}}>
          <Text style={{textAlign:"center", fontSize: 18}}>Trang chủ</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default TicketScreen
