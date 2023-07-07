import firebase from "firebase/compat/app"

export const createAddress = (data: any) => {
    firebase.firestore()
        .collection("address")
        .doc(data.uid)
        .set(data)
        .then(() => { })
}

export const findAddressByUserId = async (userId: string) => {
    const data: any = []
    if (userId != undefined) {
        const querySnapshot = await firebase.firestore()
            .collection("address")
            .where("userId", "==", userId)
            .get()

        querySnapshot.forEach((documentSnapshot) => {
            data.push({
                id: documentSnapshot.id,
                ...documentSnapshot.data(),
            })
        })
    }
    return data
}
