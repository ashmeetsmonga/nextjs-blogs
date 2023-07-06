export const getBlog = async (blogID: string) => {
	const res = await fetch(`https://dev.to/api/articles/${blogID}`);

	if (!res.ok) throw new Error("Failed to fetch data");

	return res.json();
};
