import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TelaCompra } from "../screens/TelaCompra";
import { TelaProdutos } from "../screens/TelaProdutos";

const Tab = createBottomTabNavigator();
export const RootNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={"Tela de Compra"} component={TelaCompra} />
            <Tab.Screen name={"Tela de Produtos"} component={TelaProdutos} />
        </Tab.Navigator>
    )
}