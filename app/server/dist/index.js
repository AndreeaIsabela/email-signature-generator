"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const templateRoutes_1 = __importDefault(require("./routes/templateRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send({ message: 'Hello from TypeScript Express!' });
});
app.use('/templates', templateRoutes_1.default);
app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
