export interface TemplateRequirement {
  name: string;
  type: string;
}

export interface TemplateDetails {
  id: number;
  requirements: TemplateRequirement[]
}


