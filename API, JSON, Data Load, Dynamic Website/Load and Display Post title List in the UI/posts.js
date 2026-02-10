const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      displayPost(data);
    });
};

const displayPost = (posts) => {
  //UsingForLoop
  //   for (let i = 0; i < posts.length; i++) {
  //     console.log(posts[i]);
  //   }

  //UsingForOfLoop
  //   for (let post of posts) {
  //     console.log(post);
  //   }

  //   1. GetContainer
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  //   console.log(postContainer);

  //UsingForEach
  posts.forEach((post) => {
    // console.log(post);

    // 2. CreateHTMLElement
    const li = document.createElement("li");
    li.innerText = post.title;
    // console.log(li);

    // 3. AddliIntoContainer
    postContainer.appendChild(li);
  });
};
