import { getCustomRepository } from 'typeorm';
 
import People from '../models/People';
import PeopleRepository from '../repositories/PeopleRepository';

interface Request {
  nome: string;
}

class CreatePeopeleService {

   public async execute({ nome }: Request) : Promise<People>{

   const peopleRepository = getCustomRepository(PeopleRepository);

   const people = peopleRepository.create({ nome });
   
   await peopleRepository.save(people);

   return people;

   }

}

export default CreatePeopeleService;