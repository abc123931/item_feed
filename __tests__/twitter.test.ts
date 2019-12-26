import twitter from "../src/twitter";

describe("twitter test", () => {
  test("search tweets", async () => {
    const actual = await twitter.searchTweetsWithMedia({
      keyword: "スプラトゥーン",
      count: 30
    });
    expect(actual.length).not.toBe(0);
    actual.map(status => expect(status.entities.media.length).not.toBe(0));
  });
});
