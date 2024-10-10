import Link from "next/link";

export default function NotPoundPage() {
  return (
    <div className="container mx-auto">
      <p>
        <Link className=" text-green-500" href="/">
          Back to Home
        </Link>
      </p>
      <div className="lg:text-9xl text-4xl font-bold text-primary h-screen flex items-center justify-center">
        <h1>404</h1>
      </div>
    </div>
  );
}
