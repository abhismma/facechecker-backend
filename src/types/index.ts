export interface FaceMatch {
  imageUrl: string;
  name: string;
  similarity: number;
  source: string;
  description?: string;
  links?: {
    label: string;
    url: string;
  }[];
}