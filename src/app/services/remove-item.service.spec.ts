import { TestBed } from '@angular/core/testing';

import { RemoveItemService } from './remove-item.service';

describe('RemoveItemService', () => {
  let service: RemoveItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
