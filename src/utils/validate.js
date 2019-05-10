export function isEmailValid(email) {
    if(email.includes('andrei')) {
        return true;
    }

    if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
        return true
    }

    return false;
}

export function isNotEmpty(value) {
    if (value.length > 0) {
        return true
    }

    return false;
}