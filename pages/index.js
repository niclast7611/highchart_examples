import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HighChart Examples</h1>
      <Link href="/charts/PageOne">
        <button type="button">Page One</button>
      </Link>
      <Link href="/charts/PageTwo">
        <button type="button">Page Two</button>
      </Link>
      <Link href="/charts/Test">
        <button type="button">Test</button>
      </Link>
    </div>
  );
}
