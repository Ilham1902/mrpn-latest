import CryptoJS from "crypto-js";

const pass = "dkl1U3VqcmNNm9CygqNpiJBES7IZvVs8WDTN4MWK17QNeVtT9OzKD8Uca14LQihx";

export const encryptValue = (value: string) => {
    const masterKey = pass;
    const plainValue = value;
    const key = CryptoJS.lib.WordArray.random(8).toString();
    const cipher = CryptoJS.AES.encrypt(
        plainValue,
        CryptoJS.enc.Utf8.parse(key),
        {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }
    ).toString();
    const keyCipher = CryptoJS.AES.encrypt(
        key,
        CryptoJS.enc.Utf8.parse(masterKey),
        {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }
    ).toString();
    const encryptedData = cipher + keyCipher;
    const encodedWord = CryptoJS.enc.Utf8.parse(encryptedData);
    const encoded = CryptoJS.enc.Base64.stringify(encodedWord);
    return encoded;
};

export const decryptValue = (value: string) => {
    const masterKey = CryptoJS.enc.Utf8.parse(pass);
    const encodedWord = CryptoJS.enc.Base64.parse(value);
    const decoded = CryptoJS.enc.Utf8.stringify(encodedWord);
    const chiperValue = decoded;
    const chiperKey = chiperValue.substring(chiperValue.length - 44);
    const key = CryptoJS.AES.decrypt(chiperKey, masterKey, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    const result = chiperValue.substring(0, chiperValue.length - 44);
    return CryptoJS.AES.decrypt(result, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
};