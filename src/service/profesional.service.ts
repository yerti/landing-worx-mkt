import { ProfesionalCardsList } from "@/mocks/profesional.mock";
import { ProfesionalCards } from "@/types/entities/ProfesionalCards.entien";

class ProfesionalService {
  list(): Promise<ProfesionalCards[]> {
    return Promise.resolve(ProfesionalCardsList);
  }

  getById(id: number): Promise<ProfesionalCards | undefined> {
    return Promise.resolve(ProfesionalCardsList.find((profesional) => profesional.idProfesional === id));
  }
}

const profesionalService = new ProfesionalService();
export default profesionalService;
