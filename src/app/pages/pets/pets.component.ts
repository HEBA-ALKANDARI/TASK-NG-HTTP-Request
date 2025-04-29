import { Component, effect, inject, signal } from '@angular/core';
import { PetsHeaderComponent } from '../../components/pets-header/pets-header.component';
import { PetsListComponent } from '../../components/pets-list/pets-list.component';
import { Pet, pets } from '../../../data/pets';
import { PetsService } from '../../service/pets.service';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetsHeaderComponent, PetsListComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  private petsService = inject(PetsService);
  query = '';
  allPets = signal<Pet[]>([]);

  httpEffect = effect(() => {
    this.petsService.getAllPets().subscribe(petsRes => this.allPets.set(petsRes));
  })

  setQuery(query: string) {
    this.query = query;
  }

  get filteredPets() {
    return this.allPets().filter((pet) =>
      pet.name.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
