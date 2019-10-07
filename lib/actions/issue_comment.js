"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const words_1 = __importDefault(require("../words"));
function checkIssueComment(context) {
    console.log(`log: ${context}`);
    const result = words_1.default(`${context.payload.comment.body}`);
    console.log(`log: ${result}`);
}
exports.checkIssueComment = checkIssueComment;
