import express from 'express';
import { generateSignature, getTemplate, getTemplates } from '../controllers/templatesController';

const router = express.Router();

router.get('/', getTemplates);
router.get('/:id', getTemplate);
router.post('/', generateSignature);

export default router;