import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet, pets } from '../../../data/pets';
import { PetsService } from '../../service/pets.service';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {
  petsService = inject(PetsService);
  pet = signal<Pet | null>(null);

  constructor(private route: ActivatedRoute, private router: Router) {
    effect(() => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.petsService.getPet(id).subscribe(p => {
        this.pet.set(p)

        if (!p) {
          this.router.navigate(['/pets']);
        }
      })
    });
  }
}
