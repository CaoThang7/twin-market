import firebase from "firebase/compat/app"

export const getALlCategories = async () => {
    const data: any = []
    const querySnapshot = await firebase.firestore()
        .collection("categories")
        .orderBy("title", "asc") //sort by title
        .get()

    querySnapshot.forEach((documentSnapshot) => {
        data.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
        })
    })
    return data
}