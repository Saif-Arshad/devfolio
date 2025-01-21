import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
export const dynamic = 'force-dynamic'
const GITHUB_USER_ENDPOINT = 'https://api.github.com/graphql';

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export async function GET(req: NextRequest, res: NextResponse) {
  const username = 'saif-arshad';
  const token = process.env.GITHUB_READ_USER_TOKEN_PERSONAL;
  try {

    const response = await axios.post(
      GITHUB_USER_ENDPOINT,
      {
        query: GITHUB_USER_QUERY,
        variables: {
          username: username,
        },
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    );

    const status: number = response.status;
    const responseJson = response.data;

    if (status > 400) {
      return NextResponse.json({ status, data: {} });
    }

    const res = NextResponse.json({ status, data: responseJson.data.user });
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (error: any) {
    return NextResponse.json({ status: 500, data: {} });

  }
}