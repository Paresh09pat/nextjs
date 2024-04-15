import Link from "next/link";
import Navbar from "../../Components/Navbar";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {/* <h1 style={{ color: "red", width: "100%",textAlign:"center"}}>Hello World blog</h1> */}
      {data.slice(0, 6).map((curElem) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "30px",
              marginBottom: "15px",
              padding: "10px",
              width: "50%",
              marginInline: "auto",
              color: "black",
              backgroundColor: "white",
            }}
          >
            <h3>{curElem.id}</h3>
            <Link href={`blog/${curElem.id}`}>
              <h2>{curElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;
