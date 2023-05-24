import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { MoviesCards } from '../Context';
const TicketComponent = () => {
    const { ticket } = useContext(MoviesCards);

    return (
        <View>
            {ticket.slice(0, 1).map((item, index) => (
                <ImageBackground
                style={{ aspectRatio: 5 / 2, height: 170 }}
                source={{
                    uri: item.image,
                }}
            >
                <Pressable style={{ position: "absolute", height: 130, backgroundColor: "white", padding: 10, borderRadius: 6, top: 140, left: 20, width: "75%" }}>
                    <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>VÉ ĐÃ MUA</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>

                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                            <Text style={{ fontSize: 16, fontWeight: "400", color: "gray", marginTop: 4 }}>English</Text>
                        </View>

                        
                    </View>
                    <Text style={{ marginTop: 8, fontSize: 15 }}>{item.mall}</Text>
                </Pressable>
            </ImageBackground>
            
            ))}

<View style={{marginTop: 100}}/>

            
        </View>
    )
}

export default TicketComponent

const styles = StyleSheet.create({})
