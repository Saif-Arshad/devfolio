"use server"


import axios from 'axios';

export const fetchGithubData = async () => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/api/github`);
    if (response.status >= 400) {
      throw new Error('Error fetching GitHub data');
    }
    return response.data;
  } catch (error: any) {
    console.error("Frontend Error:", error.message);
    return { error: 'Failed to fetch data. Please try again later.' };
  }
};
