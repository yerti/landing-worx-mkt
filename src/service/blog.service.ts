import { BlogList } from "@/mocks/Blog.mock";
import { BlogType } from "@/types/entities/BlogType";

class BlogService {
  list(): Promise<BlogType[]> {
    return Promise.resolve(BlogList);
  }

  getById(id: number): Promise<BlogType | undefined> {
    return Promise.resolve(BlogList.find((blog) => blog.idBlog === id));
  }
}

const blogService = new BlogService();
export default blogService;
