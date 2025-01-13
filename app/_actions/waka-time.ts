"use server"


import axios from 'axios';

export const getWakaStats = async () => {
    try {
        const response = await axios.get(`${process.env.BASE_URL}/api/waka-stats`);
        if (response.status >= 400) {
            throw new Error('Error fetching waka data');
        }
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ fetchGithubData ~ error:", error)
        console.error("Frontend Error:", error.message);
        return { error: 'Failed to fetch data. Please try again later.' };
    }
};
