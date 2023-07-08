import Toast from 'react-native-toast-message';

export const showToastErrorAddress = (titleError: string, subTitleError: string) => {
    Toast.show({
        type: "error",
        text1: titleError,
        text2: subTitleError,
        autoHide: true,
        visibilityTime: 3000,
        position: 'top',
        topOffset: 50,
    })
}