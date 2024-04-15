import Navbar from "@/Components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const error = () => {
  const router = useRouter();
 
  const handleClick = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 20000);
  }, []);

  return (
    <>
      <Navbar />

      <h1>404 ERROR</h1>

      <div style={{ cursor: "pointer" }} onClick={handleClick}>
        Go back
      </div>
      <br />
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push("/contact");
        }}
      >
        Go back to contact
      </div>
    </>
  );
};

export default error;
