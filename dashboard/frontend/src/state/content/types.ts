export interface FormQuestion {
  type: "TextField" | "RadioGroup" | "CheckboxGroup" | "Input";
  [key: string] : any; // any other
}
export type FormSpecification = FormQuestion[]

export interface ConceptData {
  concept_id: number;
  concept_name: string;
  formSpecification?: FormSpecification;
  otherData?: any[];
}

export interface appContent {
  data: ConceptData[];
}
