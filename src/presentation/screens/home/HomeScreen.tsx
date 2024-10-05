import { View, Text, Pressable } from "react-native"
import { globalStyles } from "../../theme/theme"
import { useNavigation } from "@react-navigation/native"

export const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={globalStyles.container} >
        <Pressable 
          style={ globalStyles.primaryButton }
          onPress={ () => navigation.navigate('Products' as never) }
        >
          <Text style={globalStyles.buttonText}> Productos</Text>
        </Pressable>
    </View>
  )
}
