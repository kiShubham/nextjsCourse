import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Blog" },
};

export default function page() {
  return <div>second page</div>;
}
