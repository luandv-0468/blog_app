import { BaseService } from "./BaseService.service";
// import { IPost } from "../types";

class PostService extends BaseService {
    public async getPostLists(page: number, limit: number): Promise<any> {
        try {
            const res = await this.httpClientPublic.get(
                `/post/list?page=${page}&limit=${limit}`
            );

            return res.data;
        } catch (error: any) {
            return error;
        }
    }
}

export const postService: PostService = new PostService();
