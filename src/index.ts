import getRssFeed from "./rss";
import twitter from "./twitter";

async function init() {
  const tweetList = await twitter.searchTweetsWithMedia({
    keyword: "スプラトゥーン",
    count: 1
  });
  // await getRssFeed("http://rssblog.ameba.jp/bomme5792l/rss20.xml");
  await getRssFeed("http://blog.livedoor.jp/monstsubdiary/index.rdf");
}

init();
