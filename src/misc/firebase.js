// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where, getDoc, doc, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEJzz5jrhvSM0LpAsII7TnRIO38iQ3bDU",
  authDomain: "montoya-react-ecommerce.firebaseapp.com",
  projectId: "montoya-react-ecommerce",
  storageBucket: "montoya-react-ecommerce.appspot.com",
  messagingSenderId: "678457174636",
  appId: "1:678457174636:web:a273f0fb6b84da49be8649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts(){
    const response = await getDocs(collection(db,'products'));
    console.log(response);
    const arrayProds = new Array();
    response.forEach((docu) => {
        arrayProds.push({id: docu.id, ...docu.data()});
    });
    return arrayProds;
}

export async function getProductsByCategory (idCateg)
{
    console.log(idCateg);
    const q = query(collection(db,'products'), where('category_id',"==",parseInt(idCateg)));
    const responseQuery = await getDocs(q);
    const arrayQuery = new Array();
    console.log(responseQuery);
    responseQuery.forEach((docu) => {
        arrayQuery.push({id: docu.id, ...docu.data()});
    });
    return arrayQuery;
}

export async function getProductByID (idProd)
{
    const q = query(collection(db,'products'), where('id_product',"==",parseInt(idProd)));
    const response = await getDocs(q);
    let objQuery;
    console.log(response);
    response.forEach((docu) => {
        objQuery = {id: docu.id, ...docu.data()};
    });
    return objQuery;
}

export async function getCategories(){
    const response = await getDocs(collection(db,'categories'));
    const arrayCategories = new Array();
    response.forEach((docu) => {
        arrayCategories.push({id: docu.id, ...docu.data()});
    });
    return arrayCategories;
}

export async function sendOrder(order) {
    const ordersCollection = collection(db, 'orders');
    const docRef = await addDoc(ordersCollection, order);
    console.log('docRef generado: ' + JSON.stringify(docRef));
    console.log('id generado: ' + docRef.id);
    alert('Nuevo pedido recibido, id: ' + docRef.id);
}

export async function getOrders() {
    const response = await getDocs(collection(db,'orders'));
    const arrayOrders = new Array();
    response.forEach((docu) => {
        arrayOrders.push({id:docu.id, ...docu.data()});
    });
    return arrayOrders;
}