/* eslint-disable @typescript-eslint/no-explicit-any */
import { account } from './appwrite';

// export const registerUser = async (email: string, password: string, name: string) => {
//     try {
//         await account.create('unique()', email, password, name);
//         console.log('User registered successfully');
//     } catch (error: any) {
//         console.error('Registration failed:', error.message);
//     }
// };

export const loginUser = async (email: any, password: any) => {
    try {
        await account.createEmailPasswordSession(email, password);
        console.log('User logged in successfully');
    } catch (error: any) {
        console.error('Login failed:', error.message);
    }
};

export const logoutUser = async () => {
    try {
        await account.deleteSession('current');
        console.log('User logged out successfully');
    } catch (error: any) {
        console.error('Logout failed:', error.message);
    }
};

export const getCurrentUser = async () => {
    try {
        const user = await account.get();
        return user;
    } catch (error: any) {
        console.error('Failed to fetch user:', error.message);
    }
};
