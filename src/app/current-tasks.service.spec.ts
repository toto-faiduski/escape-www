import { TestBed } from '@angular/core/testing';

import { CurrentTasksService } from './current-tasks.service';

describe('CurrentTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentTasksService = TestBed.get(CurrentTasksService);
    expect(service).toBeTruthy();
  });
});
