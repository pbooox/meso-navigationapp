import { Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import type { RootStackParams } from "../../routes/StackNavigator";
import { useEffect } from "react";
import { Pressable } from "react-native-gesture-handler";

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }
        >
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])
  

  return (
    <View style={globalStyles.container} >
      <PrimaryButton
        onPress={ () => navigation.navigate('Products') }
        label="Productos"
      />
      <PrimaryButton
        onPress={ () => navigation.navigate('Settings') }
        label="Settings"
      />
    </View>
  )
}
