export function isEmpty(value: any) {
    let result = false;
    if (value === "" || value === null || value === undefined) {
        result = true;
    }
    return result;
}