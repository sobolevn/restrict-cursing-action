"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: support other cuss languages
const cuss = require('cuss/index.json');
function hasBadWords(text) {
    return Object.keys(cuss).some((word) => text.includes(word));
}
exports.default = hasBadWords;
