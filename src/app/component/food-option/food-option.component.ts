import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

interface Restaurant {
  name: string;
  rating: number;
  image: string;
  priceRange: number;
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
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other biryani restaurants
      ];
    } else if (this.foodType === 'biryani') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'pizzas') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'south-indian') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'chinese') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'burgers') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'dosa') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'pasta') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'paratha') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'salad') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'pastery') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else if (this.foodType === 'shake') {
      this.restaurants = [
        {
          name: 'Biryani House',
          rating: 4.5,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_1854.JPG',
          priceRange: 100,
        },
        {
          name: 'Spice Biryani',
          rating: 4.2,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwsk5thy5ibpdh4yaf7y',
          priceRange: 200,
        },
        {
          name: 'Italian Pasta Co.',
          rating: 4.8,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/8bacd247-766f-4de0-a985-daba4df07383_765513.jpg',
          priceRange: 300,
        },
        {
          name: 'Pasta World',
          rating: 4.1,
          image:
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilht6bcempwuwq1hn61q',
          priceRange: 400,
        },
        // ... other pasta restaurants
      ];
    } else {
      this.restaurants = [
        {
          name: 'Default Restaurant',
          rating: 4.3,
          image: 'assets/default-restaurant.jpg',
          priceRange: 100,
        },
        // Default or general restaurants if no specific type is matched
      ];
    }
  }
}
