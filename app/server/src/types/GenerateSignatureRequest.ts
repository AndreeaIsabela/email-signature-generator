import { SignatureData } from "./SignatureData";

export interface GenerateSignatureRequest {
  templateId: number;
  webhookUrl: string;
  data: SignatureData[];
}

