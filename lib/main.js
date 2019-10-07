"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
// We name these files the same way as they are named in Github Actions:
const issues_1 = require("./actions/issues");
const issue_comment_1 = require("./actions/issue_comment");
// TODO: check commit comments
// TODO: check based on eventName
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = core.getInput('token');
            console.log(core.getInput('GITHUB_TOKEN'), core.getInput('token'));
            const octokit = new github.GitHub(token);
            switch (github.context.eventName) {
                case 'issue_comment':
                    return issue_comment_1.checkIssueComment(github.context, () => __awaiter(this, void 0, void 0, function* () {
                        yield octokit.issues.updateComment(Object.assign({}, github.context.repo, { 'comment_id': github.context.payload.comment.id, 'body': 'I am so sorry! :pray:' }));
                    }));
                case 'issues':
                    return issues_1.checkIssue(github.context);
            }
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
