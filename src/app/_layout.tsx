import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack >
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown:false //this will make sure that (tabs) will not be shown as header for all bottom tabs
              }}
              />
              {/* <Stack.Screen
              name="(tabs)/account"
              options={{
                headerShown:true
              }}
              />
                this is not the way to show header for account bottom bar because
                the header shown properties account bottom bar is owned by _layout of (tabs) folder 
                not by this _layout folder
              */}
            </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}