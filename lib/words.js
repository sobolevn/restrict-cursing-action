"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getWords() {
    // TODO: support other cuss languages
    return require('cuss/index.json');
}
function hasBadWords(text) {
    return Object.keys(getWords()).some((word) => text.includes(word));
}
exports.default = hasBadWords;
