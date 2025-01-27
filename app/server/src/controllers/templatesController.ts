import { SigntureTemplate } from "../types/SignatureTemplate";
import {Response, Request } from 'express'
import { SignatureTemplatePreview } from "../types/SignatureTemplatePreview";
import { GenerateSignatureRequest } from "../types/GenerateSignatureRequest";

const templates: SigntureTemplate[] = require('../data/templtes.json')

export const getTemplates = (req: Request, res: Response) => {
  const response: SignatureTemplatePreview[] = templates.map(t => {
    return {
      id: t.id,
      placeholder: t.placeholder
    }
  })
  res.send(response)
}

export const getTemplate = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const template = templates.find(t => t.id == id);
  if(template) {
    res.send({
      id: template.id,
      requirements : template.requirements
    });
  } else {
    res.status(404).end();
  }
}

export const generateSignature = (req: Request, res: Response) => {
  const signatureRequest: GenerateSignatureRequest = req.body;
  res.status(201).end();
}