import { api } from '@/utils/api';
// import { api}


export default function Home() {
  const { data, isLoading } = api.lessons.getAll.useQuery();

  if (isLoading) return "Loading...";

  if (!data?.lessons) return null;
  
  console.log({ data });
  return <div>{data.lessons.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <span>{item.description}</span>
      </div>
    );
  })}</div>;
}

