import Parser from 'rss-parser';

const parser = new Parser();

async function getRssFeed(url: string) {
  const feed = await parser.parseURL(url);
  // const items = feed.items?.map(item => {
  //   const res = item.content?.match("<img.*src\s*=\s*[\"|\'](.*?)[\"|\'].*>");
  //   console.log(res);
  //   return;
  // });
  const item = feed.items?.find(item => item);
  console.log(item?.link)
  console.log(item?.content)
  const test = item?.content?.match("<img.*src\s*=\s*[\"|\'](.*?)[\"|\'].*>");
  console.log(test);
  console.log(test![0]);
// var regex = /<img.*?src\s*=\s*[\"|\'](.*?)[\"|\'].*?>/g;
// var found = paragraph.match(regex);
// var urls = found.flatMap(i => i.match(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/g))

// console.log(urls);
}

export default getRssFeed;
