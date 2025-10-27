export function validateEmail(email) {
    const isValid = email
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return isValid
        ? undefined
        : new Error("Email is invalid.");
}
;
export function validateUsername(username) {
    const regex = /^[a-zA-Z0-9]+$/;
    const isValid = regex.test(username);
    return isValid
        ? undefined
        : new Error("Username is invalid. A username can only contain alphanumeric characters.");
}
//# sourceMappingURL=account.validation.js.map