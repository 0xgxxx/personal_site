import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="flex items-center justify-start space-x-5 align-middle">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          <Link href="/">gxxx</Link>
        </h1>
        <div className="flex items-center text-gray-900 dark:text-white">
          <Link href="/thoughts">Thoughts</Link>
        </div>
      </div>
    </nav>
  );
};
