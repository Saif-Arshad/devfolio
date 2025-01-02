import { getALLTimeSinceToday, getReadStats } from '@/_lib/waka-time';

export async function getWakaStats() {
    try {
        const readStatsResponse = await getReadStats();
        const allTimeSinceTodayResponse = await getALLTimeSinceToday();

        const data = {
            ...readStatsResponse.data,
            all_time_since_today: allTimeSinceTodayResponse.data,
        };

        return { data };
    } catch (error) {
        return {
            error: "An error occurred while fetching Waka stats",
            details: error?.message || error,
        };
    }
}
