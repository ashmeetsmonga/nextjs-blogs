import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
	return (
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
				<Link href={`/${blog.id}`}>
					<h2 className='text-3xl font-bold text-primary'>{blog.title}</h2>
				</Link>
				<p className='text-xl text-white'>{blog.description}</p>
				<div className='flex gap-2'>
					{blog.tag_list.map((tag, idx) => (
						<div key={idx} className='text-primary border border-primary rounded-2xl px-2 py-1'>
							{tag}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
