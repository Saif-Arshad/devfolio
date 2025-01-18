"use service"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { account } from './appwrite';

const setCookie = (cName: string, cValue: any, exDays: any) => {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
};

export const loginUser = async (email: any, password: any) => {
    try {
        const res = await account.createEmailPasswordSession(email, password);
        setCookie("admin-token", res.userId, 300)
    } catch (error: any) {
        console.error('Login failed:', error.message);
    }
};

export const logoutUser = async () => {
    try {
        await account.deleteSession('current');
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
