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

export const emailValid = (inputtxt: string) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (inputtxt.match(regexEmail)) {
        return true;
    }
    else {
        alert("Invalid Email");
        return false;
    }
}

export const fullnameValid = (inputtxt: string) => {
    const regexFullName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
    if (inputtxt.match(regexFullName)) {
        return true;
    }
    else {
        alert("Invalid FullName");
        return false;
    }
}



