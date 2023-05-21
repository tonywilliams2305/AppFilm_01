import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import malls from '../data/malls';




const MovieScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState("");
    const mallsData = malls;
    const [mall, setMall] = useState([]);
    const [seatsData, setSeatsData] = useState([]);


    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                    <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 600 }}>{route.params.name}</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                    <Feather name="search" size={24} color="black" />
                    <AntDesign style={{ marginHorizontal: 10 }} name="filter" size={24} color="black" />
                    <AntDesign name="sharealt" size={24} color="black" />
                </View>
            </View>


            <HorizontalDatepicker
                mode="gregorian"
                startDate={new Date('2023-05-19')}
                endDate={new Date('2023-05-31')}
                initialSelectedDate={new Date('2023-05-19')}
                onSelectedDateChange={(date) => setSelectedDate(date)}
                selectedItemWidth={170}
                unselectedItemWidth={38}
                itemHeight={38}
                itemRadius={10}
                selectedItemTextStyle={styles.selectedItemTextStyle}
                unselectedItemTextStyle={styles.selectedItemTextStyle}
                selectedItemBackgroundColor="#222831"
                unselectedItemBackgroundColor="#ececec"
                flatListContainerStyle={styles.flatListContainerStyle}
            />
            {mallsData.map((item, index) => (
                <Pressable onPress={() => {
                    setMall(item.name);
                    setSeatsData(item.tableData);
                }} style={{ margin: 10 }} key={index}>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.name}</Text>
                    {mall.includes(item.name) ? (
                        <FlatList
                            numColumns={3}
                            data={item.showtimes}
                            renderItem={({ item }) =>
                                <Pressable onPress={() => navigation.navigate("Theatre", { mall: mall, name: route.params.name, timeSelected: item, tableSeats: seatsData, date: selectedDate, image: route.params.image })} style={{ borderWidth: 0.5, borderColor: "red", padding: 5, width: 80, borderRadius: 7, margin: 5 }}>
                                    <Text style={{ fontSize: 16, color: "red", textAlign: "center" }}>{item}</Text>
                                </Pressable>}
                        />
                    ) : (
                        null
                    )}
                </Pressable>
            ))}

        </SafeAreaView>
    )
}

export default MovieScreen

const styles = StyleSheet.create({})