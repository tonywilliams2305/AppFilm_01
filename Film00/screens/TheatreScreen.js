import { View, Text, SafeAreaView, FlatList, Pressable, Alert } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MoviesCards } from '../Context'
import { useStripe } from '@stripe/stripe-react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';

const TheatreScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { seats, setSeats, occupied } = useContext(MoviesCards);
  const onSeatSelect = (item) => {
    const seatSeleted = seats.find((seat) => seat === item);
    if (seatSeleted) {
      setSeats(seats.filter((seat) => seat !== item))
    } else {
      setSeats([...seats, item])
    }
  }

  const showSeats = () => {
    return (

      <View >
        <Text>
          Chỗ ngồi đã chọn
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {

            seats.map((seat, index) => (

              <Text style={{ paddingHorizontal: 2 }}>{seat}</Text>


            ))
          }
        </View>

      </View>

    )

  }
  const displaySeats = [...seats]
  const fee = 500;

  const noOfSeats = seats.length;
  const priceValue = noOfSeats * 500;
  const total = seats.length > 0 ? (fee + noOfSeats * 500) : 0;
  const stripe = useStripe()
  const subscribe = async () => {
    const response = await fetch("http://192.168.1.3:8000/payment", {
      method: "POST",
      body: JSON.stringify({
        amount: Math.floor(total * 100),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) return Alert.alert(data.message);
    const clientSecret = data.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: 'hihi'
    })
    if (initSheet.error) return Alert.alert(initSheet.error.message)
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    })
    if (presentSheet.error) return Alert.alert(presentSheet.error.message);

    else {
      occupied.push(...seats)
      navigation.navigate("Ticket", {
        name: route.params.name,
        mall: route.params.mall,
        timeSelected: route.params.timeSelected,
        total: total,
        image: route.params.image,
        date: route.params.date,
        selectedSeats: displaySeats,
        priceValue: priceValue,
      })

      setSeats([])
    }
  }


  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
          <View style={{ marinLeft: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>{route.params.name}</Text>
            <Text style={{ marginTop: 4, color: "gray", fontSize: 15, fontWeight: 500 }}>{route.params.mall}</Text>
          </View>

        </View>
      </View>


      <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", marginTop: 10 }}>{route.params.timeSelected}</Text>

      <View style={{ marginTop: 20 }} />
      <FlatList numColumns={7} data={route.params.tableSeats} renderItem={({ item }) => (
        <Pressable onPress={() => onSeatSelect(item)} style={{ borderWidth: 1, margin: 5, borderColor: "black", borderRadius: 5, marginVertical: 10 }}
        >
          {
            seats.includes(item) ? (
              <Text style={{ backgroundColor: "yellow", padding: 10 }}>{item}</Text>
            ) :
              occupied.includes(item) ? (
                <Text style={{ backgroundColor: "#989898", padding: 10 }}>{item}</Text>
              ) : (
                <Text style={{ padding: 10 }}>{item}</Text>
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

      <View style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View >
          {seats.length > 0 ? (
            showSeats()
          ) : (
            <Text>Chưa chọn chỗ ngồi</Text>
          )}
        </View>

        <View style={{ padding: 10 }}>
        </View>
      </View>

      <Pressable onPress={subscribe} style={{ backgroundColor: "green", padding: 10, justifyContent: "space-between", flexDirection: "row" }}>
        {seats.length > 0 ? (
          <Text>Đã chọn {seats.length} chỗ ngồi</Text>
        ) : (
          <Text></Text>
        )}

        <Text style={{ fontSize: 18 }}>Thanh toán {total * 10 * 10} VNĐ</Text>


      </Pressable>
    </SafeAreaView>
  )
}

export default TheatreScreen
