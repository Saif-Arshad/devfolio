import { ID, Permission, Role } from "appwrite";
import { storage } from "./appwrite";


export const uploadImage = async (file: File) => {
    const storageId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID!;

    try {
        const response = await storage.createFile(storageId, ID.unique(), file,
            [
                Permission.read(Role.any()),
                Permission.update(Role.users()),
                Permission.delete(Role.users()),
            ]
        );
        return storage.getFilePreview(storageId, response.$id);
    } catch (error) {

        console.log("Error uploading image:", error);

    }
};