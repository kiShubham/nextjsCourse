import { notFound } from "next/navigation";

export default function reviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      review {params.reviewId} for product {params.productId}
    </h1>
  );
}
