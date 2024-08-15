import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
import {  collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc, writeBatch } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBdfR_yqRVO-ime6NgMdjSSpgPuS9BBbnE",
    authDomain: "restsoft-454cd.firebaseapp.com",
    projectId: "restsoft-454cd",
    storageBucket: "restsoft-454cd.appspot.com",
    messagingSenderId: "99832657588",
    appId: "1:99832657588:web:5a9cf536470e70f2fe49e1"
  };

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const {  email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };
  
  export const createAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  
  export const signOutUser = async () => await signOut(auth);
  
  export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);

 export const getUserDocumentByUID =  async(uid) => {
    try {
      const userDocRef = doc(db, 'users', uid);
      const userSnapshot = await getDoc(userDocRef);
      return userSnapshot.data();
     
    } catch (error) {
      console.error("Error getting document:", error);
      return null;
    }
  }

  // add data to firebase from js file
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef,object.name.toLowerCase()); 
        batch.set(docRef, object);
    });

    await batch.commit();
};


export const getRestaurantsByUsername = async (username) => {
    try {
      const docRef = doc(db, 'restaurants', username);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return docSnap.data().menu;
      } else {
        console.log('No such document!');
        return ;
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }
  };

export const getAllRestaurants = async () => {
    try {
      const collectionRef = collection(db, 'restaurants');
      const querySnapshot = await getDocs(collectionRef);
      const restaurants = querySnapshot.docs.map(doc => ({ id: doc.id, name: doc.data().name, url: doc.data().IconUrl, location: doc.data().location}));
      return restaurants;
    } catch (error) {
      console.error('Error getting documents:', error);
    }
  };

  export const deleteItem = async (restaurantId, categoryIndex, itemIndex) => {
    try {
      const restaurantRef = doc(db, 'restaurants', restaurantId);
      
      // Get the current document
      const docSnap = await getDoc(restaurantRef);
      if (!docSnap.exists()) {
        throw new Error('Restaurant document not found');
      }
  
      const restaurantData = docSnap.data();
      const updatedMenu = [...restaurantData.menu];
  
      // Remove the item from the specified category
      updatedMenu[categoryIndex].items.splice(itemIndex, 1);
  
      // Update the document in Firestore
      await updateDoc(restaurantRef, { menu: updatedMenu });
  
      console.log('Item deleted successfully');
      return updatedMenu; // Return the updated menu for local state update
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  };

  export const deleteCategory = async (restaurantId, categoryIndex) => {
    try {
      const restaurantRef = doc(db, 'restaurants', restaurantId);
      
      // Get the current document
      const docSnap = await getDoc(restaurantRef);
      if (!docSnap.exists()) {
        throw new Error('Restaurant document not found');
      }
  
      const restaurantData = docSnap.data();
      const updatedMenu = [...restaurantData.menu];
  
      // Remove the category
      updatedMenu.splice(categoryIndex, 1);
  
      // Update the document in Firestore
      await updateDoc(restaurantRef, { menu: updatedMenu });
  
      console.log('Category deleted successfully');
      return updatedMenu; // Return the updated menu for local state update
    } catch (error) {
      console.error('Error deleting category:', error);
      throw error;
    }
  };
  

  export const addItemToCategory = async (restaurantId, categoryName, item) => {
    try {
      const restaurantRef = doc(db, 'restaurants', restaurantId);
  
      const restaurantSnapshot = await getDoc(restaurantRef);
      const restaurantData = restaurantSnapshot.data();
  
      const categoryIndex = restaurantData.menu.findIndex(
        (menuItem) => menuItem.category === categoryName
      );
  
      if (categoryIndex === -1) {
        throw new Error('Category not found');
      }
  
      const updatedMenu = [...restaurantData.menu];
      updatedMenu[categoryIndex].items.push(item);
  
      await updateDoc(restaurantRef, { menu: updatedMenu });
  
      console.log('Item added successfully');
    } catch (error) {
      console.error('Error adding item: ', error);
    }
  };

  export const addCategory = async (restaurantId, newCategory) => {
    try {
      const restaurantRef = doc(db, 'restaurants', restaurantId);
      
      // Get the current document
      const docSnap = await getDoc(restaurantRef);
      if (!docSnap.exists()) {
        throw new Error('Restaurant document not found');
      }
  
      const restaurantData = docSnap.data();
      const updatedMenu = [...restaurantData.menu, { category: newCategory, items: [] }];
  
      // Update the document in Firestore
      await updateDoc(restaurantRef, { menu: updatedMenu });
  
      console.log('Category added successfully');
      return updatedMenu; 
    } catch (error) {
      console.error('Error adding category:', error);
      throw error;
    }
  };

  export const updateItem = async (id, categoryIndex, editedItems, currentMenu) => {
    console.log('firebase access update')
    if (Object.keys(editedItems).length === 0) {
      return { success: true, noChanges: true };
    }
  
    try {
      const restaurantRef = doc(db, "restaurants", id);
      const docSnap = await getDoc(restaurantRef);
      
      if (!docSnap.exists()) {
        throw new Error("Restaurant document does not exist");
      }
  
      const restaurantData = docSnap.data();
      const updatedMenu = [...(restaurantData.menu || [])];
  
      if (!updatedMenu[categoryIndex]) {
        updatedMenu[categoryIndex] = { items: [] };
      }
  
      updatedMenu[categoryIndex].items = currentMenu[categoryIndex].items.map((item, index) => {
        if (editedItems[index]) {
          return { ...item, ...editedItems[index] };
        }
        return item;
      });
  
      await updateDoc(restaurantRef, { menu: updatedMenu });
      
      console.log(`Updated items in category ${categoryIndex}`);
      return { 
        success: true, 
        noChanges: false,
        updatedMenu: updatedMenu
      };
    } catch (error) {
      console.error("Error updating items: ", error);
      return { success: false, message: "Failed to update menu", error };
    }
  };