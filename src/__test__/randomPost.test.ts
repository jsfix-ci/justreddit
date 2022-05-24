import { randomPost } from "../functions/randomPost";

test("randomPost", async () => {
    const post = await randomPost({ sortType: "top", postGetLimit: 1 });
    expect(post).toBeDefined();
});
