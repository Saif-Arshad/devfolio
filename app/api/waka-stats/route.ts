import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
import { getALLTimeSinceToday, getReadStats } from "@/app/_lib/waka-time";
export const dynamic = 'force-dynamic'


export async function GET(req: NextRequest, res: NextResponse) {
  try {


    const readStatsResponse = await getReadStats();
    const allTimeSinceTodayResponse = await getALLTimeSinceToday();

    const data = {
      ...readStatsResponse.data,
      all_time_since_today: allTimeSinceTodayResponse.data,
    };


    return NextResponse.json({ data: data });
  } catch (error: any) {
    return NextResponse.json({ status: 500, data: {}, message: "An error occurred while fetching Waka stats" });

  }
}