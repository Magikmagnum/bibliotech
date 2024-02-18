import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carte-livre',
  standalone: true,
  imports: [],
  templateUrl: './carte-livre.component.html',
  styleUrl: './carte-livre.component.css',
})
export class CarteLivreComponent {
  @Input() livre: any;
  // Définir livre comme une propriété d'entrée
  constructor() {}

  ngOnInit(): void {
    console.log('livree dans coucou:', this.livre);
  }
}
