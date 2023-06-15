import { useState, useEffect } from "react"
import firebase from 'firebase/compat/app'

const useAuth = () => {
    const [userInfo, setUserInfo] = useState<any | null>(null)

    function onAuthStateChanged(value: any) {
        setUserInfo(value)
    }

    function getCurrentUserInfo() {
        const subscriber = firebase.auth().onAuthStateChanged
        return subscriber
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber
    }, [])

    return { userInfo, getCurrentUserInfo }
}

export default useAuth