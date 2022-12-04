export function removeExtraSpaceFromString(str) {
    const rule = /\s{1,}/g;
    str = str.split(rule).join(" ");
    return str;
}