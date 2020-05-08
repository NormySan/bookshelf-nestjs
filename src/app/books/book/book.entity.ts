import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Author } from '../author/author.entity';
import { Genre } from '../genre/genre.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isbn: number;

  @ManyToMany(
    () => Author,
    author => author.id,
    { eager: true },
  )
  @JoinTable({
    name: 'authors_books',
    joinColumn: { name: 'book_id' },
    inverseJoinColumn: { name: 'author_id' },
  })
  authors: Author[];

  @ManyToMany(
    () => Genre,
    genre => genre.id,
    { eager: true },
  )
  @JoinTable({
    name: 'books_genres',
    joinColumn: { name: 'book_id' },
    inverseJoinColumn: { name: 'genre_id' },
  })
  genres: Genre[];
}
