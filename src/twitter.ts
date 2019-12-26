import Twit from "twit";

const twitterClient = new Twit({
  consumer_key: process.env.CONSUMER_KEY || "test",
  consumer_secret: process.env.CONSUMER_SECRET || "test",
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 10 * 1000,
  strictSSL: true
});

interface SearchTweetsParams {
  keyword: string;
  count: number;
}

// twitterのキーワード検索
async function searchTweetsWithMedia(
  params: SearchTweetsParams
): Promise<Twit.Twitter.Status[]> {
  try {
    const response = await twitterClient.get("search/tweets", {
      q: `${params.keyword} since:2011-07-11`,
      count: params.count
    });
    const results = response.data as Twit.Twitter.SearchResults;
    return results.statuses.filter(status => status.entities.media);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default { searchTweetsWithMedia };
