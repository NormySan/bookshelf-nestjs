import { Injectable } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { GenreType } from './genre.type';
import { GenreRepository } from './genre.repository';
import { Genre } from './genre.entity';

@Injectable()
@Resolver(() => GenreType)
export class AuthorResolver {
  constructor(private genreRepository: GenreRepository) {}

  @Query(() => GenreType)
  async genre(@Args('id', { type: () => ID }) id: string): Promise<Genre> {
    return await this.genreRepository.findOne(id);
  }

  @Query(() => [GenreType])
  async genres(): Promise<Genre[]> {
    return await this.genreRepository.find();
  }
}
