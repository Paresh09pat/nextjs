
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString()
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
   props:{
    data,
   }
  };
};

const dated = ({ data }) => {
  return (
    <>
      <div
        style={{
          display: "",
          gap: "30px",
          marginBottom: "15px",
          padding: "10px",
          width: "50%",
          marginInline: "auto",
          color: "black",
          backgroundColor: "white",
        }}
      >
        <h3>{data.id}</h3>
        <h3>{data.title}</h3>
        <h3>{data.body}</h3>
      </div>
    </>
  );
};

export default dated;
