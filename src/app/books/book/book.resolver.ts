import { Injectable } from '@nestjs/common';
import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Author } from '../author/author.entity';
import { AuthorType } from '../author/author.type';

import { Book } from './book.entity';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';
import { BookType } from './book.type';
import { BookSearchRepository } from './book-search.repository';

import { Genre } from '../genre/genre.entity';
import { GenreType } from '../genre/genre.type';

@Injectable()
@Resolver(() => BookType)
export class BookResolver {
  constructor(
    private readonly bookRepository: BookRepository,
    private readonly bookSearchRepository: BookSearchRepository,
    private readonly bookService: BookService,
  ) {}

  @Query(() => BookType)
  async book(@Args('id', { type: () => ID }) id: string) {
    return await this.bookService.getById(Number(id));
  }

  @Query(() => [BookType])
  async books() {
    return await this.bookService.getAll();
  }

  @Query(() => [BookType])
  async searchBooks(
    @Args('title', { nullable: true }) title?: string,
    @Args('isbn', { nullable: true }) isbn?: string,
  ) {
    return this.bookSearchRepository.search(title);
    // return await this.bookService.search({ title, isbn });
  }

  @ResolveField(() => [GenreType])
  async authors(@Parent() book: Book): Promise<Genre[]> {
    return book.genres;
  }

  @ResolveField(() => [AuthorType])
  async genres(@Parent() book: Book): Promise<Author[]> {
    return book.authors;
  }
}
