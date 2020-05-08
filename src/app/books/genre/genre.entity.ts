import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    () => Book,
    book => book.genres,
  )
  books: Book[];
}
