import amqp, { ConsumeMessage } from 'amqplib';
import Handlebars  from 'handlebars';
import axios from 'axios';
import { htmlToText } from 'html-to-text';

const RABBITMQ_URL = process.env.RABBITMQ_URL || '';
const QUEUE_NAME = 'my-queue';

const consumeMessages = async() => {
	try {
		const connection = await amqp.connect(RABBITMQ_URL);
		const channel = await connection.createChannel();

		await channel.assertQueue(QUEUE_NAME, { durable: true });

		channel.consume(
			QUEUE_NAME,
			async (msg: ConsumeMessage | null) => {
				if (msg !== null) {
				
					const messageContent = msg.content.toString(); 
					const messageObject = JSON.parse(messageContent);

					// console.log('Received message object:', messageObject);

					const template = generateTemplate(messageObject);
					await sendTemplate(template, messageObject.webhookUrl);

					channel.ack(msg);
				}
			},
			{ noAck: false }
		);
	} catch (error) {
		console.error('Error consuming messages:', error);
	}
}

const generateTemplate = (messageContent: {
	template: string;
	data: {
		name?: string;
		email?: string;
		logo?: string;
		phone?: string;
	}
}): string => {
	const compiledTemplate = Handlebars.compile(messageContent.template);
	const result = compiledTemplate(messageContent.data);

	return result;
}

const sendTemplate = async (template: string, webhookUrl: string) => {
	try{
		const plainTextContent = htmlToText(template, {
			wordwrap: 130,
		});

		await axios.post(webhookUrl, {
      htmlContent: template,
			plainTextContent
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
	} catch(error) {
		console.error('Error:', error);
	}
}

consumeMessages();
