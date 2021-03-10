import People from '../models/People';
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(People)
class PeopleRepository extends Repository<People>{


}

export default PeopleRepository;