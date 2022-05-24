import { randomPostFromSub } from "./randomPostFromSub";

type data = {
    reddit: string,
    sortType: string,
    postGetLimit: number,
};

export async function randomImageFromSub(data: data): Promise<string> {
    let image: string | null = null;

    while (!image) {
        const post = await randomPostFromSub(data);
        image = post.image;
    }
    
    return image;
}
