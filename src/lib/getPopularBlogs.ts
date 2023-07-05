export const getPopularBlogs = async () => {
	const res = await fetch(`https://dev.to/api/articles`);

	if (!res.ok) throw new Error("Failed to fetch data");

	return res.json();
};
