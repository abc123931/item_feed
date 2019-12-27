import Parser from "rss-parser";
import libxmljs from "libxmljs";
import R from "ramda";

const parser = new Parser();

async function getRssFeed(url: string) {
  const feed = await parser.parseURL(url);
  // const items = feed.items?.map(item => {
  //   const res = item.content?.match("<img.*src\s*=\s*[\"|\'](.*?)[\"|\'].*>");
  //   console.log(res);
  //   return;
  // });
  const item = feed.items?.find(item => item);
  console.log(item?.link);
  // livedoorはcontent:encodedに入っている説
  // amebloはcontentに入っている
  const livedoorContent = item!['content:encoded'];
  const documentImg = libxmljs.parseHtmlString(livedoorContent);
  // gifは取り除きたい
  const images = documentImg.find("//img").filter(
    e =>
      e
        .attr("src")
        ?.value()
        .search(/.*gif$/) === -1
  ).map(e => e.attr("src")?.value());
  console.log(R.uniq(images));
  console.log(
    documentImg
      .get("//img")
      ?.attr("src")
      ?.value()
  );
}

export default getRssFeed;
