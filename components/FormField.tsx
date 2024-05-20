import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { icons } from "../constants";

type FormType = {
    title: string;
    value: any;
    placeholder?: string;
    handleChange: (e: any) => void;
    otherStyles?: any;
    keyboardType?: any;
}

const FormField = ({ title, value, placeholder, handleChange, otherStyles, keyboardType }: FormType) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
            <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
                <TextInput
                   className="w-full text-center flex-1 text-white font-psemibold text-base"
                   value={value}
                   placeholder={placeholder}
                   placeholderTextColor="#7b7b8b"
                   onChangeText={handleChange}
                   secureTextEntry={title === 'Password' && !showPassword}
                />
                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField