import axios from 'axios';


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

export const fetchGithubData = async () => {
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
            return { status, data: {} };
        }

        return { status, data: responseJson.data.user };
    } catch (error:any) {
        console.log("🚀 ~ fetchGithubData ~ error:", error)
        return { status: 500, data: {} };

    }
};

