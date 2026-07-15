import { useRef } from "react";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {
    Text
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function BottomSheetComponent({
    onClose
}:{
    onClose:()=>void
}){
    const bottomSheetReference = useRef<BottomSheet>(null);

    return (
            <BottomSheet
                ref={bottomSheetReference}
                enablePanDownToClose
                enableDynamicSizing={false}
                snapPoints={["70%","95%"]}
                onClose={onClose}
            >
                <BottomSheetView>
                    <Text>
                        Content of bottom sheet
                    </Text>
                    <Text>
                        BottomSheetView requires children as props
                    </Text>
                </BottomSheetView>
            </BottomSheet>
    )
}