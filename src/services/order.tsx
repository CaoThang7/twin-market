import firebase from "firebase/compat/app"

export const createOrder = (data: any) => {
    firebase.firestore()
        .collection("orders")
        .doc(data.orderId)
        .set(data)
        .then(() => { })
}

export const findOrderPendingByUserId = async (userId: string) => {
    const data: any = []
    if (userId != undefined) {
        const querySnapshot = await firebase.firestore()
            .collection("orders")
            .where("userId", "==", userId)
            .where("status", "==", "pending")
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

export const findOrderSuccessByUserId = async (userId: string) => {
    const data: any = []
    if (userId != undefined) {
        const querySnapshot = await firebase.firestore()
            .collection("orders")
            .where("userId", "==", userId)
            .where("status", "==", "success")
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

export const findOrderCancelByUserId = async (userId: string) => {
    const data: any = []
    if (userId != undefined) {
        const querySnapshot = await firebase.firestore()
            .collection("orders")
            .where("userId", "==", userId)
            .where("status", "==", "cancel")
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

export const findOrderById = async (orderId: string) => {
    const querySnapshot = await firebase.firestore()
        .collection("orders")
        .where(firebase.firestore.FieldPath.documentId(), "==", orderId)
        .get()
    let order

    querySnapshot.forEach((documentSnapshot) => {
        order = {
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
        }
    })
    return order
}