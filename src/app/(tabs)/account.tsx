import { Link } from "expo-router"
import {
    Text,
    Button
} from "react-native"
import { useState } from "react";
import BottomSheetComponent from "@/components/BottomSheet"
export default function Account(){
    const [showSheet,setShowSheet] = useState(false);
    return (
        <>
            <Text> This is Account page</Text>
            <Link href="/accountinfo">
                <Text>click me to go to account info page</Text>
            </Link>
            <Button
                title="Open Bottom Sheet"
                onPress={()=>{
                    setShowSheet(true);
                }}
            ></Button>
            {showSheet && <BottomSheetComponent 
                onClose={()=>{
                    setShowSheet(false);
                }}
            />}
        </>
    )
}