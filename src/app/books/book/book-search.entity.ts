import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books_search')
export class BookSearch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isbn: number;
}
