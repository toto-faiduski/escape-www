import { TestBed } from '@angular/core/testing';

import { RecentTasksService } from './recent-tasks.service';

describe('RecentTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecentTasksService = TestBed.get(RecentTasksService);
    expect(service).toBeTruthy();
  });
});
