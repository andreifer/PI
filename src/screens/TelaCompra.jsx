import { useState } from "react";
import { Text, Searchbar } from "react-native-paper";
import { StatusBar, View } from "react-native-web";
import { styles } from "../config/styles";

export function TelaCompra({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
          <StatusBar style="light" backgroundColor="#2C2019" translucent={true}></StatusBar>
            <Searchbar style={styles.barra}
                placeholder="Busque na TopFerro..."
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Text style={styles.text}>Seu carrinho esta vazio</Text>
            <Text style={styles.text}>Adicione itens</Text>
        </View>
    )
}