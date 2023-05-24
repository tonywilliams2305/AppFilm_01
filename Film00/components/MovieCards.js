import { View, Text, FlatList, Pressable, Image } from 'react-native'
import movies from '../data/movies'
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import { MoviesCards } from '../Context';
import { useContext } from 'react';
import TicketComponent from './TicketComponent';
const MovieCards = () => {
    const data = movies;
    const {ticket} = useContext(MoviesCards)
    const navigation = useNavigation();
    return (
        <View>
            <FlatList showsVerticalScrollIndicator={false} numColumns={2} ListHeaderComponent={ticket.length > 0 ? TicketComponent : Header} data={data} renderItem={({ item }) => (
                <Pressable style={{ margin: 10 }}>
                    <Image style={{ aspectRatio: 2 / 3, height: 240 }} source={{ uri: item.image }} />

                    <Text style={{ fontSize: 16, fontWeight: 'bold', width: 160 }}>{item.name.substr()}</Text>

                    <Text>{item.language}</Text>

                    <Text style={{ fontSize: 15 }}>{item.genre}</Text>

                    <Pressable 
                     onPress={() => navigation.navigate("Phim",{
                        name: item.name,
                        image: item.image
                     })} 
                     style={{ backgroundColor: "yellow", padding: 10, borderRadius: 6, width: 153, marginRight: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500, textAlign: "center" }}>ĐẶT VÉ</Text>
                    </Pressable>
                </Pressable>
            )} />
        </View>
    )
}

export default MovieCards
