import { createSlice } from "@reduxjs/toolkit";


const Categories =  ['New Cars', 'Used Cars', 'Luxury Cars', 'Electric Cars', 'Minivans', 'Pickup Trucks', 'Sports Cars', 'Off-Road Vehicles'];

const Items = [
  {
    id: 1,
    category: 'New Cars',
    name: 'Cadillac Escalade',
    price: 89590,
    desc: 'Compact SUV with excellent fuel economy.',
    availability: 'In Stock',
    itemImage: require('../assets/images/cadillac-escalade.jpg'),
    rating: 4.2,
    reviewCount: 850,
  },
  {
    id: 2,
    category: 'New Cars',
    name: 'Jeep Wrangler',
    price: 98000,
    desc: 'Reliable SUV with great performance.',
    availability: 'In Stock',
    itemImage: require('../assets/images/jeep-wrangler.jpg'),
    rating: 4.5,
    reviewCount: 1200,
  },
  {
    id: 3,
    category: 'New Cars',
    name: 'Ford Mustang',
    price: 28000,
    desc: 'Powerful sports car with a bold design.',
    availability: 'Out of Stock',
    itemImage: require('../assets/images/ford-mustang.avif'),
    rating: 4.3,
    reviewCount: 650,
  },
  {
    id: 4,
    category: 'New Cars',
    name: 'Chevrolet Malibu',
    price: 24000,
    desc: 'Stylish sedan with spacious interior.',
    availability: 'Out of Stock',
    itemImage: require('../assets/images/chevrolet-malibu.jpg'),
    rating: 3.8,
    reviewCount: 420,
  },
  {
    id: 17,
    category: 'New Cars',
    name: 'Toyota Corolla',
    price: 20000,
    desc: 'Affordable sedan with reliable performance.',
    availability: 'In Stock',
    itemImage: require('../assets/images/Toyota-corolla.jpg'),
    rating: 4.0,
    reviewCount: 900,
  },
  {
    id: 18,
    category: 'New Cars',
    name: 'Honda Accord',
    price: 28000,
    desc: 'Stylish and efficient sedan with a smooth drive.',
    availability: 'In Stock',
    itemImage: require('../assets/images/honda-accord.jpg'),
    rating: 4.4,
    reviewCount: 1100,
  },
  {
    id: 5,
    category: 'Used Cars',
    name: 'Used Toyota Camry',
    price: 14000,
    desc: 'Used sedan, one owner, low mileage.',
    availability: 'In Stock',
    itemImage: require('../assets/images/used-toyota-camry.jpeg'),
    rating: 4.1,
    reviewCount: 320,
  },
  {
    id: 6,
    category: 'Used Cars',
    name: 'Used Honda Civic',
    price: 13000,
    desc: 'Pre-owned sedan, clean interior, well maintained.',
    availability: 'In Stock',
    itemImage: require('../assets/images/used-honda-civic.jpg'),
    rating: 4.0,
    reviewCount: 275,
  },
  {
    id: 7,
    category: 'Used Cars',
    name: 'Used Nissan Altima',
    price: 12500,
    desc: 'Well-kept used sedan with solid performance.',
    availability: 'In Stock',
    itemImage: require('../assets/images/used-nissan-altima.jpg'),
    rating: 3.9,
    reviewCount: 220,
  },
  {
    id: 8,
    category: 'Used Cars',
    name: 'Used Hyundai Sonata',
    price: 12000,
    desc: 'Affordable sedan with excellent condition.',
    availability: 'Out of Stock',
    itemImage: require('../assets/images/used-hyundai-sonata.jpeg'),
    rating: 3.7,
    reviewCount: 180,
  },
  {
    id: 9,
    category: 'Luxury Cars',
    name: 'BMW 7 Series',
    price: 75000,
    desc: 'Luxury sedan with advanced tech and performance.',
    availability: 'Pre-order',
    itemImage: require('../assets/images/luxury-BMW-7-series.png'),
    rating: 4.6,
    reviewCount: 850,
  },
  {
    id: 10,
    category: 'Luxury Cars',
    name: 'Porsche 911 Carrera',
    price: 121000,
    desc: 'Premium sedan with sophisticated features.',
    availability: 'Pre-order',
    itemImage: require('../assets/images/luxury-porsche-911-carrera.jpeg'),
    rating: 4.8,
    reviewCount: 620,
  },
  {
    id: 11,
    category: 'Luxury Cars',
    name: 'Maserati mc20',
    price: 85000,
    desc: 'Flagship luxury sedan with top-of-the-line features.',
    availability: 'Pre-order',
    itemImage: require('../assets/images/luxury_maserati_mc20-.jpg'),
    rating: 4.4,
    reviewCount: 500,
  },
  {
    id: 12,
    category: 'Luxury Cars',
    name: 'Porsche Panamera',
    price: 95000,
    desc: 'Luxury sports sedan with high performance and sleek design.',
    availability: 'In Stock',
    itemImage: require('../assets/images/porsche-panamera.jpg'),
    rating: 4.7,
    reviewCount: 750,
  },
  {
    id: 21,
    category: 'Luxury Cars',
    name: 'Mercedes-Benz S-Class',
    price: 115000,
    desc: 'Flagship luxury sedan with a lavish interior and cutting-edge technology.',
    availability: 'Pre-order',
    itemImage: require('../assets/images/luxury-mercedes-benz-s-class-s-550.jpg'),
    rating: 4.9,
    reviewCount: 300,
  },
  {
    id: 22,
    category: 'Luxury Cars',
    name: 'Aston Martin DB11',
    price: 180000,
    desc: 'Premium luxury car with exquisite design and unmatched performance.',
    availability: 'Pre-order',
    itemImage: require('../assets/images/luxury-aston-martin.jpg'),
    rating: 4.6,
    reviewCount: 220,
  },
  {
    id: 13,
    category: 'Electric Cars',
    name: 'Tesla Model 3',
    price: 35000,
    desc: 'Electric sedan with long range and high performance.',
    availability: 'In Stock',
    itemImage: require('../assets/images/electric-tesla-model-3.jpg'),
    rating: 4.5,
    reviewCount: 1400,
  },
  {
    id: 14,
    category: 'Electric Cars',
    name: 'Chevrolet Bolt EV',
    price: 37000,
    desc: 'Compact electric vehicle with excellent range.',
    availability: 'Out of Stock',
    itemImage: require('../assets/images/electric-chevrolet-bolt-ev.jpg'),
    rating: 4.3,
    reviewCount: 680,
  },
  {
    id: 15,
    category: 'Electric Cars',
    name: 'Nissan Leaf',
    price: 28000,
    desc: 'Popular electric car with a solid range and budget-friendly price.',
    availability: 'In Stock',
    itemImage: require('../assets/images/electric-nissan-leaf.jpg'),
    rating: 4.2,
    reviewCount: 950,
  },
  {
    id: 16,
    category: 'Electric Cars',
    name: 'Ford Mustang Mach-E',
    price: 50000,
    desc: 'All-electric Sedan with high performance and rugged design.',
    availability: 'In Stock',
    itemImage: require('../assets/images/electric-ford-mustang-mach-e.jpg'),
    rating: 4.4,
    reviewCount: 800,
  },
  {
    id: 23,
    category: 'Electric Cars',
    name: 'Rivian R1T',
    price: 72000,
    desc: 'Electric pickup with rugged design and impressive towing capacity.',
    availability: 'Pre-order',
    itemImage: require('../assets/images/electric-rivian-r1t.jpeg'),
    rating: 4.5,
    reviewCount: 400,
  },
  {
    id: 24,
    category: 'Electric Cars',
    name: 'Lucid Air',
    price: 85000,
    desc: 'Luxury electric sedan with exceptional performance and range.',
    availability: 'Pre-order',
    itemImage: require('../assets/images/electric-lucid-air.jpg'),
    rating: 4.7,
    reviewCount: 550,
  }, 
];


const itemSlice = createSlice({
    //takes three keys
    name : 'itemArrays',

    initialState: {
        ListofItems : Items,
        ListofCategories : Categories,
    },

    reducers : {
        //key-value pairs, where key(action-name/-type to perform), value is (function)
        //redux allows us to make changes to the same state variable unlike conetxt where we had to return a new object

        addItem : (state, action) => {
            state.ListofItems.push(action.payload);
        },

        // iterates, find matching id, drop item and replace with new item at action.payload
        editItem : (state, action) => {
          for (let i=0; i < state.ListofItems.length; i++){

            if(state.ListofItems[i].id === action.payload.id)
                state.ListofItems.splice(i,1, action.payload);
          }

        },

        deleteItem : (state, action) => {

            for (let i=0; i < state.ListofItems.length; i++){

                if(state.ListofItems[i].id === action.payload)
                    state.ListofItems.splice(i,1);
            }

        },

    }
}); 

export const {addItem, editItem, deleteItem} = itemSlice.actions;

export default itemSlice.reducer;