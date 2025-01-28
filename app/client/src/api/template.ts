import axios from 'axios';

import type { TemplatePreview } from '@/types/TemplatePreview';
import type { TemplateDetails } from '@/types/TemplateDetails';
import type { TemplateForm } from '@/types/TemplateForm';

const API_URL = import.meta.env.VITE_API_URL || '';

export const getTemplates = async (): Promise<TemplatePreview[] | undefined> => {
  try {
    const templates = await axios.get<TemplatePreview[]>(`${API_URL}/templates`);
    return templates.data;

  } catch(error) {
    console.log(error);
  }
}

export const getTemplateDetails = async (templateId: number): Promise<TemplateDetails | undefined> => {
  try {
    const detils = await axios.get<TemplateDetails>(`${API_URL}/templates/${templateId}`);
    return detils.data;

  } catch(error) {
    console.log(error);
  }
}

export const generateTemplate = async (templateData : TemplateForm, templateId: number, webhookUrl: string) => {
  try {
    await axios.post(`${API_URL}/templates`, {
      data: templateData,
      templateId,
      webhookUrl
    });

  } catch(error) {
    console.log(error);
  }
}
