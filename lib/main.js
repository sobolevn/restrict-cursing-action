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
const issue_comment_1 = require("./actions/issue-comment");
// TODO: check commit comments
// eslint-disable-next-line max-lines-per-function, complexity
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!process.env.GITHUB_TOKEN) {
                throw new Error('Github token is missing');
            }
            const octokit = new github.GitHub(process.env.GITHUB_TOKEN);
            switch (github.context.eventName) {
                case 'issue_comment':
                    issue_comment_1.checkIssueComment(github.context.payload.comment, () => __awaiter(this, void 0, void 0, function* () {
                        yield octokit.issues.updateComment(Object.assign({}, github.context.repo, { 'comment_id': github.context.payload.comment.id, 'body': core.getInput('text') }));
                    }));
                    break;
                case 'pull_request':
                case 'issues': {
                    const payload = github.context.payload.issue ||
                        github.context.payload.pull_request;
                    if (!payload) {
                        throw new Error('Missing issue payload');
                    }
                    issues_1.checkIssue(payload, () => __awaiter(this, void 0, void 0, function* () {
                        yield octokit.issues.update(Object.assign({}, github.context.repo, { 'issue_number': payload.number, 'body': core.getInput('text'), 'title': core.getInput('text') }));
                    }));
                    break;
                }
                default:
                    // eslint-disable-next-line no-console
                    console.log(`Unsupported event type: ${github.context.eventName}`);
            }
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
