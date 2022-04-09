import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function HomePage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps({ params }) {
  /**
   * process.cwd()    -> pasta root do projeto (nesse caso, nextjs-section-5)
   * data             -> pasta a ser carregada em seguida
   * dummy-data.json  -> arquivo dentro desta pasta
   */

  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath); // readFile() retorna uma promise pois está importada de "fs/promises"
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true }; // retorna a página 404
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // (ISR) -> tempo de reload do getStaticProps
  };
}

export default HomePage;
