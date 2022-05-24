import { randomImage } from "../functions/randomImage";

test("randomImage", async () => {
    const image = await randomImage({ sortType: "top", postGetLimit: 1 });
    expect(typeof image).toBe("string");
});
