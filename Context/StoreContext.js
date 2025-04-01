import { createContext, useReducer } from "react";

const ItemContext = createContext();

const Item_Categories =  ['New Cars', 'Used Cars', 'Luxury Cars', 'Electric Cars'];

const Items = [
    {
        id: 1,
        category: 'New Cars',
        name: 'Cadillac Escalade',
        price: 89590,
        desc: 'Compact SUV with excellent fuel economy.',
      },
      {
        id: 2,
        category: 'New Cars',
        name: 'Jeep Wrangler',
        price: 98000,
        desc: 'Reliable SUV with great performance.',
      },
      {
        id: 3,
        category: 'New Cars',
        name: 'Ford Mustang',
        price: 28000,
        desc: 'Powerful sports car with a bold design.',
      },
      {
        id: 4,
        category: 'New Cars',
        name: 'Chevrolet Malibu',
        price: 24000,
        desc: 'Stylish sedan with spacious interior.',
      },
      {
        id: 5,
        category: 'Used Cars',
        name: 'Used Toyota Camry',
        price: 14000,
        desc: 'Used sedan, one owner, low mileage.',
      },
      {
        id: 6,
        category: 'Used Cars',
        name: 'Used Honda Civic',
        price: 13000,
        desc: 'Pre-owned sedan, clean interior, well maintained.',
      },
      {
        id: 7,
        category: 'Used Cars',
        name: 'Used Nissan Altima',
        price: 12500,
        desc: 'Well-kept used sedan with solid performance.',
      },
      {
        id: 8,
        category: 'Used Cars',
        name: 'Used Hyundai Sonata',
        price: 12000,
        desc: 'Affordable sedan with excellent condition.',
      },
      {
        id: 9,
        category: 'Luxury Cars',
        name: 'BMW 7 Series',
        price: 75000,
        desc: 'Luxury sedan with advanced tech and performance.',
      },
      {
        id: 10,
        category: 'Luxury Cars',
        name: 'Porsche 911 Carrera',
        price: 121000,
        desc: 'Premium sedan with sophisticated features.',
      },
      {
        id: 11,
        category: 'Luxury Cars',
        name: 'Maserati mc20',
        price: 85000,
        desc: 'Flagship luxury sedan with top-of-the-line features.',
      },
      {
        id: 12,
        category: 'Luxury Cars',
        name: 'Porsche Panamera',
        price: 95000,
        desc: 'Luxury sports sedan with high performance and sleek design.',
      },
      {
        id: 13,
        category: 'Electric Cars',
        name: 'Tesla Model 3',
        price: 35000,
        desc: 'Electric sedan with long range and high performance.',
      },
      {
        id: 14,
        category: 'Electric Cars',
        name: 'Chevrolet Bolt EV',
        price: 37000,
        desc: 'Compact electric vehicle with excellent range.',
      },
      {
        id: 15,
        category: 'Electric Cars',
        name: 'Nissan Leaf',
        price: 28000,
        desc: 'Popular electric car with a solid range and budget-friendly price.',
      },
      {
        id: 16,
        category: 'Electric Cars',
        name: 'Ford Mustang Mach-E',
        price: 50000,
        desc: 'All-electric Sedan with high performance and rugged design.',
      },

];

const reducer = (itemlist, action) => {
    switch(action.type) {

        case 'add_item':
        return [...itemlist, action.payload];

        case 'edit_item':
        return itemlist.map ( (prod) => prod.id === action.payload.id ? action.payload : prod);

        case 'delete_item':
        return itemlist.filter( (prod) => prod.id !== action.payload);

        default:
            return itemlist;
    }
}



export const ProductProvider = (props) => {

  const [itemArray, dispatch] = useReducer(reducer, Items);


  function addProductHandler() {

    return addProduct = (newProd) => {

      dispatch({type: 'add_item', payload: newProd});

    }

  }

  function deleteProductHandler() {

    return deleteProduct = (item_id) => {

      dispatch({type: 'delete_item', payload: item_id});

    }

  }

  function editProductHandler() {

    return (updatedProd) => {

      dispatch({type: 'edit_item', payload: updatedProd});

    }

  }

    //console.log(props);

  return(
      <ItemContext.Provider value = { {Categories: Item_Categories, 
                                          ListofProducts: itemArray, 
                                          addProductFn: addProductHandler,
                                          delProductFn: deleteProductHandler,
                                          editProductFn: editProductHandler
                                          } 
                                        }
      >
          {props.children}
      </ItemContext.Provider>
  );
};

export default ItemContext;
