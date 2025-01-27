import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentReference,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "./config";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ListItem } from "@/types/firebase";

//? Firestore functions

//* Common function for GET actions
export const useList = (collectionName: string) => {
  const [list, setList] = useState<ListItem[]>([]);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getList = async () => {
      const data = await getDocs(collectionRef);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getList();
  }, []);

  return list;
};

//* Common function for POST actions
export const addItemToCollection = async (collectionName: string, data: object) => {
  try {
    const collectionRef = collection(db, collectionName);
    addDoc(collectionRef, data);
  } catch (error) {
    console.error(`Error adding item to ${collectionName}: `, error);
  }
};

//* Common function for UPDATE actions
export const updateItem = async (collectionRef: any, itemId: string, updatedData: object) => {
  try {
    const itemDocRef = doc(collectionRef, itemId);
    updateDoc(itemDocRef, updatedData);
  } catch (error: any) {
    console.error("Error updating item: " + error.message);
  }
};

//* Common function for DELETE actions
export const removeItem = async (collectionRef: DocumentReference, docId: string) => {
  const isConfirmed = window.confirm(
    "Are you sure you want to remove this item?"
  );
  if (!isConfirmed) {
    return;
  }
  try {
    const itemRef = doc(collectionRef, docId);
    deleteDoc(itemRef);
  } catch (error: any) {
    console.error("Error deleting item: " + error.message);
  }
};

//* ------------------------------------------------------------------------------------------------

//? Storage functions

//* Common function for UPLOAD actions
export const uploadFile = async (file: File, fileName: string) => {
  const fileRef = ref(storage, `uploads/${fileName}`);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
};

//* Delete image from storage
export const deleteImage = async (fileName:string) => {
  const fileRef = ref(storage, fileName);
  try {
    await deleteObject(fileRef);
  } catch (error:any) {
    console.error(`Failed to delete image: ${error.message}`);
  }
};
