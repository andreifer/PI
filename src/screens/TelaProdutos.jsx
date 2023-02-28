import { Button, Text } from "react-native-paper";
import { View } from "react-native-web";
import { styles } from "../config/styles";

export function TelaProdutos({ navigation }) {
    return (
        <View style={styles.container}>
            
            <Text>Teste da tela 2</Text>
            <Button
                style={styles.botao}
                title="Tela de Compra"
                onPress={() => navigation.navigate("Tela de Compra")}>Voltar</Button>
        </View>
    )
}