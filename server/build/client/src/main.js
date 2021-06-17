"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("hammerjs");
const core_1 = require("@angular/core");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app/app.module");
const environment_1 = require("./environments/environment");
const auth_1 = __importDefault(require("@aws-amplify/auth"));
const storage_1 = __importDefault(require("@aws-amplify/storage"));
const aws_exports_1 = __importDefault(require("./aws-exports"));
storage_1.default.configure(aws_exports_1.default);
auth_1.default.configure(aws_exports_1.default);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));
