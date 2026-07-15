import { createMaterialTopTabNavigator } from 'expo-router/js-top-tabs';
import { View,Text } from "react-native"
const Tabs=createMaterialTopTabNavigator();

export default function ForYou(){
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Library" component={LibraryScreen}/>
            <Tabs.Screen name="Liked" component={LikedScreen}/>
            <Tabs.Screen name="Suggested" component={SuggestedScreen}/>
        </Tabs.Navigator>
    )
}

function LibraryScreen(){
    return <View>
        <Text>
            This is Library top bar
        </Text>
    </View>
}

function LikedScreen(){
    return <View>
        <Text>
            This is Library top bar
        </Text>
    </View>
}
function SuggestedScreen(){
    return <View>
        <Text>
            This is Library top bar
        </Text>
    </View>
}