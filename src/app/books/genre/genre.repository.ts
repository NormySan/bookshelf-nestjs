import { Repository, EntityRepository } from 'typeorm';

import { Genre } from './genre.entity';

@EntityRepository(Genre)
export class GenreRepository extends Repository<Genre> {
  public async getGenresByBook(bookId: number): Promise<Genre[]> {
    return this.createQueryBuilder('genre')
      .leftJoin('genre.books', 'book')
      .where('book.id = :id', { id: bookId })
      .getMany();
  }
}
