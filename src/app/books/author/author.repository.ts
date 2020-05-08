import { Repository, EntityRepository } from 'typeorm';

import { Author } from './author.entity';

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {
  public async getAuthorsOfBook(bookId: number): Promise<Author[]> {
    return this.createQueryBuilder('author')
      .leftJoin('author.books', 'book')
      .where('book.id = :id', { id: bookId })
      .getMany();
  }
}
