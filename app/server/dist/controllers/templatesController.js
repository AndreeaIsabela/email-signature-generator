"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSignature = exports.getTemplate = exports.getTemplates = void 0;
const templates = require('../data/templtes.json');
const getTemplates = (req, res) => {
    const response = templates.map(t => {
        return {
            id: t.id,
            placeholder: t.placeholder
        };
    });
    res.send(response);
};
exports.getTemplates = getTemplates;
const getTemplate = (req, res) => {
    const id = parseInt(req.params.id);
    const template = templates.find(t => t.id == id);
    if (template) {
        res.send({
            id: template.id,
            requirements: template.requirements
        });
    }
    else {
        res.status(404).end();
    }
};
exports.getTemplate = getTemplate;
const generateSignature = (req, res) => {
    const signatureRequest = req.body;
    res.status(201).end();
};
exports.generateSignature = generateSignature;
