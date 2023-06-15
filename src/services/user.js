import firebase from "firebase/compat/app"

export const createUser = async (data) => {
    await firebase.firestore()
        .collection("users")
        .doc(data.id)
        .set(data)
        .then(() => { })
}

export const findUserById = async (id) => {
    let user = null
    await firebase.firestore()
        .collection("users")
        .where("id", "==", id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((documentSnapshot) => {
                user = documentSnapshot.data()
            })
        })
    return user
}