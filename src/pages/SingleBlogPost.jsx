import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBlogPost() {
	const [singlePost, setSinglePost] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();
	console.log(id);

	const FetchSinglePost = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			);
			const data = await response.json();
			console.log(data);
			setSinglePost(data);
		} catch (error) {
			console.log(error);
		}
	};

	
	useEffect(() => {
		FetchSinglePost();
	}, []);

	return (
		<section className="container" style={{ color: "white" }}>

			{isLoading ? (
<h1>Loading....</h1>

			):(
					<>
			<h1>	PWC Blog Post <span>Blog Post {id}</span></h1>
			<hr />
			<h4>{singlePost.title}</h4>
			<hr />
			<div className="postbody">
				<p>{singlePost.body}</p>
			</div>
				</>	
			)}
				
		</section>
	);
}

export default SingleBlogPost;
