import path from "path";
import fs from "fs/promises";
import React from "react";

const ProductDetailPage = ({ loadedProduct }) => {
  if (!loadedProduct) {
    // no caso de fallback: true
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath); // readFile() retorna uma promise pois está importada de "fs/promises"
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps({ params }) {
  const data = await getData();
  const productId = params.pid;
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const pathWithParams = data.products
    .map((product) => product.id)
    .map((id) => ({ params: { pid: id } }));

  return {
    paths: pathWithParams,
    // fallback: "blocking",
    fallback: true,
  };
}

export default ProductDetailPage;
