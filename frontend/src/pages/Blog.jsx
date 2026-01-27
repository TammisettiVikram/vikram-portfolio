import { getAllBlogs } from "../utils/loadBlogs";
import BlogCard from "../components/cards/BlogCard";

export default function Blog() {
    const blogs = getAllBlogs();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Blog</h1>

            <div className="grid md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                ))}
            </div>
        </div>
    );
}
