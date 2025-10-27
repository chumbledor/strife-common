const EmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export function validateEmail(email) {
    const isValid = email
        .toLowerCase()
        .match(EmailRegex);
    return isValid
        ? undefined
        : new Error("Email is invalid.");
}
;
const UsernameRegex = /^[a-zA-Z0-9]+$/;
export function validateUsername(username) {
    const isValid = UsernameRegex.test(username);
    return isValid
        ? undefined
        : new Error("Username is invalid. A username can only contain alphanumeric characters.");
}
//# sourceMappingURL=account.validation.js.map