import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../lib/styles";
import { telaInicial } from "../screens/TelaInicial";
import { telaLogin } from "../screens/TelaLogin";

const Stack= createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator style={styles.tab} screenOptions={{ headerShown: false }}>
            <Stack.Screen  name={"Inicio"} component={telaInicial} />
            <Stack.Screen  name={"Login"} component={telaLogin} />
        </Stack.Navigator>
    );
};