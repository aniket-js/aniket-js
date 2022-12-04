export function removeExtraSpaceFromString(str) {
    var rule = /\s{1,}/g;
    str = str.split(rule).join(" ");
    return str;
}