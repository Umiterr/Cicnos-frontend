const posts = [
  {
    id: 1,
    title: "Decoración",
    href: "#",
    description: "",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "",
    datetime: "",
    author: {
      name: "",
      imageUrl: "",
    },
  },
  {
    id: 2,
    title: "Moda",
    href: "#",
    description: "",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "",
    datetime: "",
    author: {
      name: "",
      imageUrl: "",
    },
  },
  {
    id: 3,
    title: "Publicidad",
    href: "#",
    description: "",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "",
    datetime: "",
    author: {
      name: "",
      imageUrl: "",
    },
  },
];

export default function LandingPage() {
  return (
    <div className="bg-white py-24 bg-opacity-0 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="items-center justify-center mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex justify-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">{post.title}</p>
                  </div>
                  <div class="flip-card-back">
                    <a href={post.href} className="flip-card-back-link">
                      <p className="title">BACK</p>
                      <p>Leave Me</p>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
