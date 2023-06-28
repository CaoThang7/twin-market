import firebase from "firebase/compat/app"

export const getALlProductUsuallyBuy = async () => {
    const data: any = []
    const querySnapshot = await firebase.firestore()
        .collection("products")
        .limit(4)
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

export const findProductByCategoriesId = async (id: string) => {
    const data: any = []
    const querySnapshot = await firebase.firestore()
        .collection("products")
        .where("categoryId", "==", id)
        .get()

    querySnapshot.forEach((documentSnapshot) => {
        data.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
        })
    })

    return data
}