import { TemplateRequirement } from "./TemplateRequirement";

export interface SigntureTemplate {
  id: number;
  placeholder: string;
  template: string;
  requirements: TemplateRequirement[]
}


