export const domain_list = {
  tianapi: "https://apis.tianapi.com"
};

export const tianapiKey = "4847beff56b970b45805ef8eb6edcc00";

interface result {
  content: string;
  [pror: string]: string;
}

export interface QuestionResponse {
  code?: number;
  msg?: string;
  result?: result;
}
