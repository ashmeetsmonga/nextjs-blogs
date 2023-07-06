import { getBlog } from "@/lib/getBlog";
import Link from "next/link";
import React from "react";

type Params = {
	params: {
		blogID: string;
	};
};

const BlogPage = async ({ params: { blogID } }: Params) => {
	const blog: SingleBlog = await getBlog(blogID);
	return (
		<div className='flex min-h-screen flex-col items-center gap-14 justify-between p-24 bg-secondary'>
			<div className='w-full flex gap-6'>
				<div className='flex flex-col gap-1'>
					<div className='text-4xl text-white font-semibold text-right uppercase'>
						{blog.readable_publish_date.split(" ")[1]}
					</div>
					<div className='text-4xl text-white font-semibold text-right uppercase'>
						{blog.readable_publish_date.split(" ")[0]}
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<h2 className='text-3xl font-bold text-primary'>{blog.title}</h2>

					<p
						className='text-xl text-white'
						dangerouslySetInnerHTML={{ __html: blog.body_html }}
					></p>
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
