/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavoritesListService } from './favorites-list.service';

describe('Service: FavoritesList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritesListService]
    });
  });

  it('should ...', inject([FavoritesListService], (service: FavoritesListService) => {
    expect(service).toBeTruthy();
  }));
});
