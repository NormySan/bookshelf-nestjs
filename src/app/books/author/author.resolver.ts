import { Injectable } from '@nestjs/common';
import {
  Resolver,
  Query,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { Author } from './author.entity';
import { AuthorService } from './author.service';
import { AuthorType } from './author.type';

import { BookService } from '../book/book.service';
import { BookType } from '../book/book.type';

@Injectable()
@Resolver(() => AuthorType)
export class AuthorResolver {
  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
  ) {}

  @Query(() => AuthorType)
  async author(@Args('id', { type: () => ID }) id: string) {
    return await this.authorService.getById(Number(id));
  }

  @Query(() => [AuthorType])
  async authors() {
    return await this.authorService.getAll();
  }

  @ResolveField(() => [BookType])
  async books(@Parent() author: Author) {
    return this.bookService.getAllByAuthor(author);
  }
}
