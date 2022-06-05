type post = {
  title: string,
  image: string,
  description: string,
}

type rec posts<'a> = array<'a>

let posts: posts<post> = [
  {
    title: "primeiro post",
    image: "/src/assets/image",
    description: "algo aq",
  },
  {
    title: "primeiro post",
    image: "/src/assets/image",
    description: "algo aq",
  },
  {
    title: "primeiro post",
    image: "/src/assets/image",
    description: "algo aq",
  },
]
