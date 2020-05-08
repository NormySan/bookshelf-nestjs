import { Injectable } from '@nestjs/common';

import { Author } from './author.entity';
import { AuthorRepository } from './author.repository';

import { Book } from '../book/book.entity';

@Injectable()
export class AuthorService {
  constructor(private authorRepository: AuthorRepository) {}

  public getAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  public getById(id: number): Promise<Author> {
    return this.authorRepository.findOne(id);
  }

  public getByBook(book: Book): Promise<Author[]> {
    return this.getAll();
  }
}
