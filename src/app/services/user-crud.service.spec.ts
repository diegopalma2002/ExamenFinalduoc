import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';

import { UserCrudService } from './user-crud.service';
import { HttpClient } from '@angular/common/http';


describe('UserCrudService', () => {
  let service: UserCrudService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserCrudService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an API call', () => {
    const mockResponse = [
      {
        id: 1,
        name: 'John Doe',
        rut: '182232121',
      },
    ];

    service.getUsers().subscribe((res) => {
      expect(res).toBeTruthy();
      expect(res).toHaveSize(1);
    });

    const mockRequest = httpTestingController.expectOne(
      'http://localhost:3000/users'
    );

    expect(mockRequest.request.method).toEqual('GET');

    // Resolve with our mock data
    mockRequest.flush(mockResponse);
  });
});