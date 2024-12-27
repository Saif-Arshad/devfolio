import { Client, Databases, Account, Storage } from 'appwrite'


export const appwrite = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)

export const databases = new Databases(appwrite)
export const account = new Account(appwrite)
export const storage = new Storage(appwrite)
