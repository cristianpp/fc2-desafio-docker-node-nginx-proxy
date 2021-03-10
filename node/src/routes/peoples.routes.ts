import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

import PeopleRepository from '../repositories/PeopleRepository';

import CreatePeopleService from '../services/CreatePeopleService';


const peopleRouter = Router();

peopleRouter.get('/', async (request, response) => {

  const peopleRepository = getCustomRepository(PeopleRepository);

  const peoples = await peopleRepository.find();

  return response.json(peoples);
});

peopleRouter.post('/' , async (request ,response) => {

  try {
  const { nome } = request.body;

  const createPeopleService = new CreatePeopleService();

  const people = await createPeopleService.execute({nome});


  return response.json(people);
  } catch(err){
    response.status(400).json( { error: err.message});
  }

});



export default peopleRouter;