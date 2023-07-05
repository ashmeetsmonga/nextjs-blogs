import BlogCard from "@/components/BlogCard";
import { getPopularBlogs } from "@/lib/getPopularBlogs";

export default async function Home() {
	const blogData: Promise<Blog[]> = getPopularBlogs();

	const blogs = await blogData;

	return (
		<main className='flex min-h-screen flex-col items-center gap-14 justify-between p-24 bg-secondary outline'>
			{blogs.map((blog, idx) => (
				<BlogCard key={idx} blog={blog} />
			))}
		</main>
	);
}
