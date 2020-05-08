import { Module } from '@nestjs/common';

import { BooksModule } from './books/books.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [BooksModule, ReviewsModule],
})
export class AppModule {}
