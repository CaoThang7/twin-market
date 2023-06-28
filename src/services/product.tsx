import firebase from "firebase/compat/app"

export const getALlProductUsuallyBuy = async () => {
    const data: any = []
    const querySnapshot = await firebase.firestore()
        .collection("products")
        .orderBy("quantityOrder", "desc") //sort by quantityOrder (desc: big to small)
        .get()

    querySnapshot.forEach((documentSnapshot) => {
        data.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
        })
    })
    return data
}