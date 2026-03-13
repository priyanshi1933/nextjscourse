import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href="/blog">Blog(Loading UI)</Link>
      <Link href="/products">Products(Dynamic Metadata)</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English(params and searchParams)</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French(params and searchParams)</Link>
      <Link href="/register">Register(Active Links & Template)</Link>
      <Link href="/order-product">Order Product(Navigating)</Link>
      <Link href="/complex-dashboard">Complex Dashboard(Parallel & Unmatched Routes & Conditional Routes)</Link>
      <Link href="/f1">Intercepting Routes</Link>
      <Link href="/photo-feed">Photo Feed</Link>
    </>
  );
}
