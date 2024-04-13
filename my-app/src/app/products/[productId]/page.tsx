export default function id({ params }: { params: { productId: string } }) {
  return <h1>id page {params.productId}</h1>;
}
