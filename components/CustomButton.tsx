import { Text, TouchableOpacity } from "react-native"

type Test = {
    title: string;
    handlePress: any;
    containerStyles: any;
    textStyles?: any;
    isLoading?: boolean;
}

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}: Test) => {
    return (
        <TouchableOpacity
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
            activeOpacity={.7}
            onPress={handlePress}
        >
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton