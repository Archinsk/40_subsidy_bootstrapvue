trancateAnnotations(128);

function trancateAnnotations(length) {
    let annotations = document.querySelectorAll(".card .card-text");
    for (let annotation of annotations) {
        if (annotation.innerText.length > length) {
            annotation.textContent = truncate(annotation.innerText, length);
        }
    }
}

function truncate(textSource, length) {
    let textSourceLenght = textSource.length;
    let textTruncated;
    let textEllipsis;
    textTruncated = textSource.substr(0, length + 1);
    textEllipsis = addEllipsis(textTruncated);
    return textEllipsis
}

function addEllipsis(textTruncated) {
    const textLength = textTruncated.length;
    let textWithEllipsis = "";
    const symbolPenultimateCode = textTruncated.codePointAt(textLength - 2);
    const symbolLastCode = textTruncated.codePointAt(textLength - 1);
    const spaceLastIndex = textTruncated.lastIndexOf(" ");

    if (isLetter(symbolPenultimateCode) && !isLetter(symbolLastCode)) {
        textWithEllipsis = textTruncated.substr(0, textLength - 1);
    } else {
        textWithEllipsis = textTruncated.slice(0, spaceLastIndex) + "\u2026";
    }
    return textWithEllipsis
}

function isLetter(symbolCode) {
    if ((symbolCode >= 65 && symbolCode <= 90) || (symbolCode >= 97 && symbolCode <= 122) || (symbolCode >= 1040 && symbolCode <= 1071) || (symbolCode >= 1072 && symbolCode <= 1103) || symbolCode == 1025 || symbolCode == 1105) {
        return true
    }
    return false
}