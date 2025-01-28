import { SigntureTemplate } from "../types/SignatureTemplate";
import {Response, Request } from 'express'
import amqp from 'amqplib';
import { SignatureTemplatePreview } from "../types/SignatureTemplatePreview";
import { GenerateSignatureRequest } from "../types/GenerateSignatureRequest";
import templates from '../data/templtes.json';
import { SignatureData } from "src/types/SignatureData";

// const templates: SigntureTemplate[] = require('../data/templtes.json')

const RABBITMQ_URL = process.env.RABBITMQ_URL || '';
const QUEUE_NAME = 'my-queue';

const sendMessageToQueue = async (obj : {
  data: SignatureData[];
  webhookUrl: string;
  template: string;
}) => {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE_NAME, { durable: true });

    const message = JSON.stringify(obj);

    channel.sendToQueue(QUEUE_NAME, Buffer.from(message), { persistent: true });
    // console.log(`Object sent to queue: ${message}`);

    setTimeout(() => {
        channel.close();
        connection.close();
    }, 500);
  } catch (error) {
      console.error('Error sending object to RabbitMQ:', error);
  }
}

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

export const generateSignature = async (req: Request, res: Response) => {
  const signatureRequest: GenerateSignatureRequest = req.body;
  const template = templates.find(t => t.id == signatureRequest.templateId);

  if (!template) {
    res.end();
    return
  }

  const message = {
    data: signatureRequest.data,
    webhookUrl: signatureRequest.webhookUrl,
    template: template.template,
  };
  
  await sendMessageToQueue(message);
  res.send(201).end();
}