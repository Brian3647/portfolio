+++
title = "Why scalability is important in programming"
date = 2021-10-16

[taxonomies]
tags = ["Tips"]
categories = ["Programming"]
+++

So, a couple days ago, I was coding as usually and I wrote this:

```rs
pub async fn from_collection(posts: Collection<Post>) -> Result<Self> {
	let cursor = posts.find(None, None).await?;
	let posts: Vec<Post> = cursor.try_collect().await?;

	let posts = posts
		.into_iter()
		.filter(|p| !p.is_reply)
		.map(|p| p.id)
		.collect();

	Ok(Self::new(posts))
}
```

The idea of the function was simple: get all posts that aren't replies from the collection and get their `_id`s.

And it worked perfectly, I tested it and it was perfect. The next day I read again the code and I knew something was wrong.

I saw this:

```rs
pub async fn from_collection(posts: Collection<Post>) -> Result<Self> {
	let cursor = posts.find(None, None).await?;
	let posts: Vec<Post> = cursor.try_collect().await?;

	let posts = posts
		.into_iter()
		.filter(|p| !p.is_reply) // Here's a loop
		.map(|p| p.id) // And another
		.collect();

	Ok(Self::new(posts))
}
```

For the 12 posts I had in the Database, the 2 loops weren't too bad, but I thought it was going to be so slow if the DB had, for example, 500 posts.

That's scalability. When you write code, you have to be careful of what works now but may not be the best option in the future.

The first change I made is use a filter directly in the `find` function:

```rs
pub async fn from_collection(posts: Collection<Post>) -> Result<Self> {
	let cursor = posts.find(doc! { "is_reply": false }, None).await?;
	let posts: Vec<Post> = cursor.try_collect().await?;

	let posts = posts
		.into_iter()
		.map(|p| p.id) // Still a loop now
		.collect();

	Ok(Self::new(posts))
}
```

But there is even a better way to do this. With 1 minute of reading documentation, I found that there was a function that did exactly what I wanted to.

The result was just this:

```rs
pub async fn from_collection(posts: Collection<Post>) -> Result<Self> {
	let filter = doc! { "is_reply": false };
	let cursor = posts.distinct("_id", filter, None).await?;

	Ok(Self::new(cursor))
}
```

An efficient, simple and small code that worked perfectly.

#### If you want another example, I recommend watching this video from Tom Scott:

<https://www.youtube.com/watch?v=QPZ0pIK_wsc>
