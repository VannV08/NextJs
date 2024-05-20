import Image from "next/image";

async function Data(id:string) {
    let res = await fetch( `https://66347d929bb0df2359a1aac9.mockapi.io/api/a1/fakeData/${id}`);
    return res.json();   
}

export default async function Page({ params }: { params: { serverId: string } }) {

    let data = await Data(params.serverId);

    return(
    <div>

        <h1>My ID: {data.id}</h1>
        <Image src={data.image} width={200} height={50} alt="image" />
        <h1>My Name: {data.lastname} {data.firstname}</h1>
        <h1>Sex: {data.sex}</h1>

    </div>
    )
  }