const SPECIAL_CHARS_REGEX = /[!@#$%^&*-_]+/;
const LETTERS_REGEX = /[a-z]+/;
const UPPER_LETTERS_REGEX = /[A-Z]+/;
const NUMBER_REGEX = /[0-9]+/;
const STRONG_PASSWORD_REGEX = /^[!@#$%^&*_a-zA-Z0-9-]+$/;

export const isReliablePassword = (password = '') => {
    const isOutOfRange = password.length > 50 || password.length < 8;
    const passwordValid =
        password.length < 12
            ? SPECIAL_CHARS_REGEX.test(password) &&
              LETTERS_REGEX.test(password) &&
              UPPER_LETTERS_REGEX.test(password) &&
              NUMBER_REGEX.test(password) &&
              STRONG_PASSWORD_REGEX.test(password)
            : STRONG_PASSWORD_REGEX.test(password);

    return !isOutOfRange && passwordValid;
};
