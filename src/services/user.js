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

export const updateUser = async (id, data) => {
    await firebase.firestore()
        .collection("users")
        .doc(id)
        .update(data)
        .then(() => { })
}

export const updateImage = async (id, imgUrl) => {
    await firebase.firestore()
        .collection("users")
        .doc(id)
        .update({
            photoUrl: imgUrl
        })
        .then(() => { })
}

export const uploadImageFirebaseStorage = async (idUser, uri) => {
    try {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storageRef = firebase.storage().ref();
        const upload = storageRef.child(`/avatrprofile/${Date.now()}`);
        await upload.put(blob);
        await upload.getDownloadURL().then((url) => {
            updateImage(idUser, url)
        });
    } catch (e) {
        throw e;
    }
}