"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@/utils/supabase/client";

export const loginUser = async (email: string, password: string) => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        throw new Error(error.message);
    }
};

export const logoutUser = async () => {
    try {
        const supabase = createClient();
        await supabase.auth.signOut();
    } catch (error: any) {
        console.error('Logout failed:', error.message);
    }
};

export const getCurrentUser = async () => {
    try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    } catch (error: any) {
        console.error('Failed to fetch user:', error.message);
    }
};
