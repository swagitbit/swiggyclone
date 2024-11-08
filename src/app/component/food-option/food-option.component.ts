import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

interface Restaurant {
  name: string;
  rating: number;
  image: string;
  priceRange: string;
}

@Component({
  selector: 'app-food-option',
  templateUrl: './food-option.component.html',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  styleUrls: ['./food-option.component.css'],
})
export class FoodOptionComponent implements OnInit {
  foodType!: string;
  restaurants: Restaurant[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.foodType = this.route.snapshot.paramMap.get('foodType') ?? 'default';

    // Set different restaurants based on foodType
    if (this.foodType === 'north-indian') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image: 'assets/biryani-house.jpg',
          priceRange: '$$',
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image: 'assets/spice-biryani.jpg',
          priceRange: '$$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other biryani restaurants
      ];
    } else if (this.foodType === 'biryani') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'pizzas') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'south-indian') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'chinese') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'burgers') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'dosa') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'pasta') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'paratha') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'salad') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'pastery') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'shake') {
      this.restaurants = [
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image: 'assets/italian-pasta.jpg',
          priceRange: '$$$',
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image: 'assets/pasta-world.jpg',
          priceRange: '$',
        },
        // ... other pasta restaurants
      ];
    } else {
      this.restaurants = [
        {
          name: 'Default Restaurant',
          rating: 4.3,
          image: 'assets/default-restaurant.jpg',
          priceRange: '$$',
        },
        // Default or general restaurants if no specific type is matched
      ];
    }
  }
}
