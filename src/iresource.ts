
export interface IResource {
  abbrev: string;
  name: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
  description?: string;
}
