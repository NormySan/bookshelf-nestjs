import { ObjectType, Field, ID } from '@nestjs/graphql';

import { AuthorType } from '../author/author.type';
import { GenreType } from '../genre/genre.type';

@ObjectType('Book')
export class BookType {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  isbn: number;

  @Field(() => [AuthorType])
  authors: AuthorType[];

  @Field(() => [GenreType])
  genres: GenreType[];
}
