"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

// Define a type for the data structure
interface Post {
  id: string;
  image: string;
  sex: string;
}

export default function ServerComponent() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const displayLimit = 6; // Set display limit to 6 items

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://66347d929bb0df2359a1aac9.mockapi.io/api/a1/fakeData?limit=${displayLimit}&page=${page}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []); // Empty dependency array ensures this runs only once on initial render

  const loadMore = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://66347d929bb0df2359a1aac9.mockapi.io/api/a1/fakeData?limit=${displayLimit}&page=${page + 1}`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const fetchedData = await res.json();
      setData((prevData) => [...prevData, ...fetchedData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 CartItem">
        {data && data.map((post) => (
          <Link href={`Server/${post.id}`} key={post.id}>
            <div className="cart">
              <p>{post.id}</p>
              <Image src={post.image} width={200} height={50} alt="image" />
              <strong>Sex: </strong>{post.sex}
              <p>{post.firstname} {post.lastname}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="d-grid gap-2 py-5">
        <Button variant="primary" onClick={loadMore} size="lg" disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </>
  );
}






// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";



// export default function ServerComponent() {

//   const [data, setData] =  useState([])
//   async function getData(){
//     const res = await fetch(`https://66347d929bb0df2359a1aac9.mockapi.io/api/a1/fakeData?limit=3`);
//     const data = await res.json();
//     setData(data);
//   }



//   return (
//     <>
//         <div className="grid grid-cols-3 gap-4 CartItem">
//             {data && data.map((post: any) => (
//                 <Link href={`Server/${post.id}`}>
//                     <div className="cart" key={post.id}>
//                         <p>{post.id}</p>
//                         <Image src={post.image} width={200} height={50} alt="image" />
//                         <strong>Sex: </strong>{post.sex}
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     </>
//   );
// }

// "use client"

// // import axios from "axios";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Button, Card, Container, Row, Col } from "react-bootstrap";

// export default function LoadMore() {
  
//   const [data, setData] =  useState([])
//   const [page, setPage] = useState(0)
//   const [loading, setLoading] = useState(false)
  
//   useEffect(() => {
//     async function loadData () {
//       setLoading(true)
//       await fetch(`https://dummyjson.com/products?limit=6&skip=${page * 6}&select=title,images,description,price`).then((res) => {
//         setData([...data, ...res.data.products])
//         setLoading(false)  
//       }).catch((err) => {
//         console.log(err)
//         setLoading(false)
//       })
//     }
//     loadData()
//   }, [page])

//   const loadMore = async () => {
//     setLoading(true)
//     setPage(page+1)
//     await fetch(`https://dummyjson.com/products?limit=6&skip=${page * 6}&select=title,images,description,price`).then((res) => {
//         setLoading(false)  
//         setData([...res.data, data])  
//       }).catch((err) => {
//         console.log(err)
//         setLoading(false)  
//       })
//   }
//   return (
//     <>
//       <Container className={'py-5'}>
//         <Link href={'/'}>Home Page</Link>
//       <Row>
//       {data && data.map((value, key) => (
//         <Col sm={4} key={key} className={'p-2'}>
//           <Card style={{height: 350}}>
//             <Card.Img variant="top" src={value.images[0]} height={150} width={150}/>
//               <Card.Body>
//                 <Card.Title>{value.title} </Card.Title>
//                 <p>
//                   <small className="text-muted">RM {value.price}</small>
//                 </p>
//                 {value.description}
//               </Card.Body>
//           </Card>
//         </Col>
//       ))}
//       </Row>
//       <div className="d-grid gap-2 py-5">
//         <Button variant="primary" onClick={loadMore} size="lg" disabled={loading}>
//           {loading ? 'Loading...':'Load More'}
//         </Button>
//       </div>
//       </Container>

//     </>
//   );
// }

// "use client"
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Button, Card, Container, Row, Col } from "react-bootstrap";

// // Define a type for the product data
// interface Product {
//   title: string;
//   images: string[];
//   description: string;
//   price: number;
// }

// export default function LoadMore() {
//   const [data, setData] = useState<Product[]>([]);
//   const [page, setPage] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     async function loadData() {
//       setLoading(true);
//       try {
//         const response = await fetch(`https://dummyjson.com/products?limit=6&skip=${page * 6}&select=title,images,description,price`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData((prevData) => [...prevData, ...result.products]);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadData();
//   }, [page]);

//   const loadMore = async () => {
//     setLoading(true);
//     setPage((prevPage) => prevPage + 1);
//     try {
//       const response = await fetch(`https://dummyjson.com/products?limit=6&skip=${page * 6}&select=title,images,description,price`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const result = await response.json();
//       setData((prevData) => [...prevData, ...result.products]);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Container className={'py-5'}>
//         <Link href={'/'}>Home Page</Link>
//         <Row>
//           {data && data.map((value, key) => (
//             <Col sm={4} key={key} className={'p-2'}>
//               <Card style={{height: 350}}>
//                 <Card.Img variant="top" src={value.images[0]} height={150} width={150}/>
//                 <Card.Body>
//                   <Card.Title>{value.title}</Card.Title>
//                   <p>
//                     <small className="text-muted">RM {value.price}</small>
//                   </p>
//                   {value.description}
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//         <div className="d-grid gap-2 py-5">
//           <Button variant="primary" onClick={loadMore} size="lg" disabled={loading}>
//             {loading ? 'Loading...' : 'Load More'}
//           </Button>
//         </div>
//       </Container>
//     </>
//   );
// }
