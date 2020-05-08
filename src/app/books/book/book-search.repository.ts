import { Repository, EntityRepository } from 'typeorm';

import { BookSearch } from './book-search.entity';

@EntityRepository(BookSearch)
export class BookSearchRepository extends Repository<BookSearch> {
  public async search(title: string): Promise<BookSearch[]> {
    return this.createQueryBuilder('book_search')
      .where('book_search.title MATCH :title', { title })
      .getMany();
  }
}
