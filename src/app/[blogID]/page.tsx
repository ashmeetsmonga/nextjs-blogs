import React from "react";

type Params = {
	params: {
		userID: string;
	};
};

const BlogPage = ({ params: { userID } }: Params) => {
	return <div>BlogPage</div>;
};

export default BlogPage;
