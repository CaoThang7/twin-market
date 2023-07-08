import firebase from "firebase/compat/app"

export const createOrder = (data: any) => {
    firebase.firestore()
        .collection("orders")
        .doc(data.orderId)
        .set(data)
        .then(() => { })
}