import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../../data/pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private http = inject(HttpClient);

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>('https://pets-react-query-backend.eapi.joincoded.com/pets').pipe(res => {
      return res;
    });
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`).pipe(res => {
      return res;
    });
  }

  createPet(pet: Pet) {
    return this.http.post<Pet>('https://pets-react-query-backend.eapi.joincoded.com/pets',pet).pipe(res => res);
  }
}
