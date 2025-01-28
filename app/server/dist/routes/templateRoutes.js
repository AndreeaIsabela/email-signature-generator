"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const templatesController_1 = require("../controllers/templatesController");
const router = express_1.default.Router();
router.get('/', templatesController_1.getTemplates);
router.get('/:id', templatesController_1.getTemplate);
router.post('/', templatesController_1.generateSignature);
exports.default = router;
