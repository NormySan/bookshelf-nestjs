import { Injectable } from '@nestjs/common';

import { Book } from './book.entity';
import { BookRepository } from './book.repository';

import { Author } from '../author/author.entity';

@Injectable()
export class BookService {
  constructor(private bookRepository: BookRepository) {}

  public async getAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  public async getById(id: number): Promise<Book> {
    return this.bookRepository.findOne(id);
  }

  public async getAllByAuthor(author: Author): Promise<Book[]> {
    return this.bookRepository
      .createQueryBuilder('book')
      .leftJoin('book.authors', 'author')
      .where('author.id = :author', { author: author.id })
      .getMany();
  }

  public async search(params: {
    title: string;
    isbn: string;
  }): Promise<Book[]> {
    const builder = this.bookRepository.createQueryBuilder('book');

    if (params.title) {
      builder.where('book.title MATCH :title', { title: params.title });
    }

    if (!params.title && params.isbn) {
      builder.where('book.isbn MATCH :isbn', { isbn: params.isbn });
    }

    if (params.title && params.isbn) {
      builder.andWhere('book.isbn MATCH :isbn', { isbn: params.isbn });
    }

    builder.orderBy('rank');

    return builder.getMany();
  }
}
