import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('peoples')
class People{
  
  @PrimaryGeneratedColumn('uuid')
  id:  string;

  @Column()
  nome: string;

}

export default People;