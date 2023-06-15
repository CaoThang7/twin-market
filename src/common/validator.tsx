export const phoneValid = (inputtxt: string) => {
    const regexPhoneNumber = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/g;
    if (inputtxt.match(regexPhoneNumber)) {
        return true;
    }
    else {
        alert("Invalid phone number");
        return false;
    }
}



