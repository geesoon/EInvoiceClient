"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAsTaxPayer = loginAsTaxPayer;
const eInvoiceClient_1 = __importDefault(require("./eInvoiceClient"));
const loginAsTaxPayerEndpoint_1 = __importDefault(require("./endpoints/loginAsTaxPayerEndpoint"));
const baseUrl = new URL("https://preprod-api.myinvois.hasil.gov.my/");
const eInvoiceClient = new eInvoiceClient_1.default(new loginAsTaxPayerEndpoint_1.default(baseUrl, "connect/token"));
function loginAsTaxPayer(request) {
    return eInvoiceClient.loginAsTaxPayer(request);
}
