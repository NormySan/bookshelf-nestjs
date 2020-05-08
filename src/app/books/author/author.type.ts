import { ObjectType, Field, ID } from '@nestjs/graphql';

import { BookType } from '../book/book.type';

@ObjectType('Author')
export class AuthorType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  biography: string;

  @Field(() => [BookType])
  books: BookType[];
}
