const PHONE_REGEX = /(^\d{11}$)/;

export const isPhone = (phone: string) => PHONE_REGEX.test(phone);
