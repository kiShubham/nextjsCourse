import { Metadata } from "next";

// making a dynamic metadata:
//>
type Props = {
  params: {
    productId: String;
  };
};
// it can also write a async fn ,
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  // suppose this is a api call/fetching some data
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

//<

export default function id({ params }: Props) {
  return <h1>details about the product {params.productId}</h1>;
}
// export default function id({ params }: { params: { productId: string } }) {
//   return <h1>details about the product {params.productId}</h1>;
// }
