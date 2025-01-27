import type { TemplatePreview } from '@/types/TemplatePreview';
import type { TemplateDetails } from '@/types/TemplateDetails';
import axios from 'axios';

export const getTemplates = async (): Promise<TemplatePreview[] | undefined> => {
  try {
    const templates = await axios.get<TemplatePreview[]>('/api/templates');
    return templates.data;

  } catch(error) {
    console.log(error);
  }
}

export const getTemplateDetails = async (templateId: number): Promise<TemplateDetails | undefined> => {
  try {
    const detils = await axios.get<TemplateDetails>(`/api/templates/${templateId}`);
    return detils.data;

  } catch(error) {
    console.log(error);
  }
}

export const generateTemplate = async (templateData : any, templateId: number) => {
  try {
    await axios.post('/api/templates', {
      data: templateData,
      id: templateId,
      webhookUrl: '...'
    
    });

  } catch(error) {
    console.log(error);
  }
}