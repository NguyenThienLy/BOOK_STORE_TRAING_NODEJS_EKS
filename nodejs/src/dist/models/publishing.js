"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publishing = void 0;
var mongoose = __importStar(require("mongoose"));
var Schema = mongoose.Schema;
var PublishingSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    books: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
        default: []
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true,
    collection: 'publishing'
});
exports.Publishing = mongoose.model('Publishing', PublishingSchema);
//# sourceMappingURL=publishing.js.map