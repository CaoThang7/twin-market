import firebase from "firebase/compat/app"

export const createCart = (data: any) => {
    firebase.firestore()
        .collection("carts")
        .doc(data.cartId)
        .set(data)
        .then(() => { })
}

export const findCartByUserId = async (userId: string) => {
    const data: any = []
    if (userId != undefined) {
        const querySnapshot = await firebase.firestore()
            .collection("carts")
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
