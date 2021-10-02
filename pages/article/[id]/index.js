import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import { Button } from "antd";
import { useCart } from "react-use-cart";

const article = ({ article }) => {
  const { addItem } = useCart();
  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 2,
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 8,
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1,
    },
    {
      id: 4,
      name: "Kullenll",
      price: 7500,
      quantity: 3,
    },
  ];
  // const router = useRouter()
  // const { id } = router.query
  let result = [article];
  
  return (
    <>
      <Meta title={article.title} />
      <img
        width={300}
        height={300}
        src={`${process.env.NEXT_PUBLIC_URL}/Media/Product/${article.featureImage}`}
        alt="Picture of the book"
      />
      <h1>{article.title}</h1>
      <p>{article.shortDescription}</p>
      <div>Price: {article.orgPrice}</div>
      <div>Product inventory: {article.count}</div>

      <div>
        {result.map((p) => (
          <div key={p.id}>
            <button onClick={() => setItem(p)}>Add to cart</button>
          </div>
        ))}
      </div>

      <Link href="/">Go Back</Link>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/Products/Detail/?Id=${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }
