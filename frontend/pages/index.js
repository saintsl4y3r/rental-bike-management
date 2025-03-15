import { gql, useQuery } from "@apollo/client";

const GET_BIKES = gql`
  query GetBikes {
    bikes {
      id
      name
      price
      quantity
    }
  }
`;

export default function Home() {
    const { loading, error, data } = useQuery(GET_BIKES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Danh sách xe máy cho thuê</h1>
            <ul className="mt-4">
                {data.bikes.map((bike) => (
                    <li key={bike.id} className="p-4 border rounded-lg shadow">
                        <h2 className="text-lg font-semibold">{bike.name}</h2>
                        <p>Giá: {bike.price} VND/ngày</p>
                        <p>Số lượng: {bike.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}