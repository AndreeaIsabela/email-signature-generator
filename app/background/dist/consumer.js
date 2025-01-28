"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = __importDefault(require("amqplib"));
const handlebars_1 = __importDefault(require("handlebars"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const RABBITMQ_URL = 'amqp://guest:guest@localhost:5672';
const QUEUE_NAME = 'my-queue';
const consumeMessages = async () => {
    try {
        const connection = await amqplib_1.default.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(QUEUE_NAME, { durable: true });
        channel.consume(QUEUE_NAME, async (msg) => {
            if (msg !== null) {
                const messageContent = msg.content.toString();
                const messageObject = JSON.parse(messageContent);
                console.log('Received message object:', messageObject);
                const template = generateTemplate(messageObject);
                await sendTemplate(template, messageContent.webhookUrl);
                channel.ack(msg);
            }
        }, { noAck: false });
    }
    catch (error) {
        console.error('Error consuming messages:', error);
    }
};
const generateTemplate = (messageContent) => {
    const compiledTemplate = handlebars_1.default.compile(messageContent.template);
    const result = compiledTemplate(messageContent.data);
    return result;
};
const sendTemplate = async (template, webhookUrl) => {
    try {
        const response = await (0, node_fetch_1.default)(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: template })
        });
        console.log('Success:', response);
    }
    catch (error) {
        console.error('Error:', error);
    }
};
consumeMessages();
