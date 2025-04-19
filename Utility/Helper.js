import axios from "axios"; //js library to interact with database

const BASE_URL = 'https://cardealershipdb-default-rtdb.firebaseio.com';

// adding the categories type db first
export async function getTypeHelper(){

    const response = await axios.get(BASE_URL+'/TypeDB.json');

    const types = [];

    for (const key in response.data){

        const t = {
            id : key,
            name : response.data[key].name,
        };
        types.push(t.name);
    }

    return types;

}




// four requests: get to retrieve, post to add, delete, put to update
//all api requests are asynchronous in  nature, so we use await keyword ahead of the request and declare function as async

export async function editItemHelper(itemID, updatedItemInfo){

    const response = await axios.put(BASE_URL+`/ItemDB/${itemID}.json`, updatedItemInfo);
    // console.log('updated:', response.data);
    
}

export async function deleteItemHelper(itemID){

    const response = await axios.delete(BASE_URL+`/ItemDB/${itemID}.json`);
    // console.log('deleted:', response.data);

}

export async function addItemHelper(newProduct){

    //takes endpoint, name of db and newItem/record being added/stored to db
    //firebase creates db if not exists
    //response with data to be captured
    const response = await axios.post(BASE_URL+'/ItemDB.json', newProduct); 

}

export async function getItemHelper(){

    //simply takes the baseurl and db from which items are retrieved
    const response = await axios.get(BASE_URL+'/ItemDB.json');

    // console.log(response.data);

    const items = [];

    for (const key in response.data){

        // constructing object i
        const i = {
            id : key,
            category : response.data[key].category,
            name : response.data[key].name,
            price : response.data[key].price,
            desc: response.data[key].desc,
            image_url : response.data[key].image_url,
            rating : response.data[key].rating,
            review_count: response.data[key].review_count
        };

        items.push(i);
    }

    // console.log(items);
    
    return items;
}