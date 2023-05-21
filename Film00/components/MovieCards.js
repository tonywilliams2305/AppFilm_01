import { View, Text, FlatList, Pressable, Image } from 'react-native'
import movies from '../data/movies'
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const MovieCards = () => {
    const data = movies;
    const navigation = useNavigation();
    return (
        <View>
            <FlatList showsVerticalScrollIndicator={false} numColumns={2} ListHeaderComponent={Header} data={data} renderItem={({ item }) => (
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
                     style={{ backgroundColor: "yellow", padding: 10, borderRadius: 6, width: 100, marginRight: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500, textAlign: "center" }}>BOOK</Text>
                    </Pressable>
                </Pressable>
            )} />
        </View>
    )
}

export default MovieCards
