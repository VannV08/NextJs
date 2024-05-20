import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoadMore from "./Server/page";

// Define the shape of the data you are fetching
interface User {
  id: string;
  name: string;
  email: string;
}


export default async function Home() {

  return (
    <>
      {/* <div className="navBar">
        <button>Home</button>
        <button>About</button>
      </div> */}
      <LoadMore />
      
      
    </>
  );
}
