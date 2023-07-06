interface Blog {
	title: string;
	id: number;
	description: string;
	readable_publish_date: string;
	tag_list: string[];
}

interface SingleBlog extends Blog {
	body_markdown: string;
	body_html: string;
}
