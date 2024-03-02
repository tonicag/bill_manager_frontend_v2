import { CompanyDTO } from "@/interfaces/company.dto";

export interface LogInResponse {
  company: CompanyDTO;
  token: string;
}
