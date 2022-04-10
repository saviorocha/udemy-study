import React from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = ({ initalSales }) => {
  const [sales, setSales] = useState(initalSales);
  const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://next-tutorial-77b29-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    const transformedSales = [];

    for (const key in data) {
      transformedSales.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume,
      });
    }

    setSales(transformedSales);
  }, [data]);

  if (error) {
    return <p>Failed to Load</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  // // useEffect(() => {
  // //   setIsLoading(true);
  // //   fetch("https://next-tutorial-77b29-default-rtdb.firebaseio.com/sales.json")
  // //     .then((res) => res.json())
  // //     .then((data) => {
  // //       const transformedSales = [];

  // //       for (const key in data) {
  // //         transformedSales.push({
  // //           id: key,
  // //           username: data[key].username,
  // //           volume: data[key].volume,
  // //         });
  // //       }

  // //       setSales(transformedSales);
  // //       setIsLoading(false);
  // //     });
  // // }, []);

  // if (!sales) {
  //   return <p>No Data Yet</p>;
  // }

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://next-tutorial-77b29-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await res.json();
  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return { props: { initalSales: transformedSales }, revalidate: 10 };
};

export default LastSalesPage;
