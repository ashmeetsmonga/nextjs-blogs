interface Blog {
	title: string;
	id: number;
	description: string;
	readable_publish_date: string;
	tag_list: string[];
	user: {
		name: string;
		username: string;
		twitter_username: null | string;
		github_username: null | string;
		profile_image: string;
	};
}

interface SingleBlog extends Blog {
	body_markdown: string;
	body_html: string;
}
