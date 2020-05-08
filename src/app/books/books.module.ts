import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Author } from './author/author.entity';
import { Book } from './book/book.entity';
import { BookSearch } from './book/book-search.entity';
import { Genre } from './genre/genre.entity';

import { AuthorRepository } from './author/author.repository';
import { BookRepository } from './book/book.repository';
import { BookSearchRepository } from './book/book-search.repository';
import { GenreRepository } from './genre/genre.repository';

import { AuthorService } from './author/author.service';
import { BookService } from './book/book.service';
import { AuthorResolver } from './author/author.resolver';
import { BookResolver } from './book/book.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Author,
      Book,
      BookSearch,
      Genre,
      AuthorRepository,
      BookRepository,
      BookSearchRepository,
      GenreRepository,
    ]),
  ],
  providers: [AuthorService, BookService, AuthorResolver, BookResolver],
  exports: [],
})
export class BooksModule {}
