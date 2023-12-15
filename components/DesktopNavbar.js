import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNavbar = () => {
  const router = useRouter();

  return (
    <nav className="hidden lg:block lg:relative lg:top-0 lg:z-30 lg:pb-8 bg-white pt-4 2xl:pt-8 rounded">
      <div className="px-4 md:px-8 lg:px-16 2xl:px-24 flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <Image
            src="/favicon.ico"
            alt="Avocado tribe Logo"
            width={40}
            height={40}
          />
          <span className="pl-4 text-2xl font-bold text-neutral-500">
            Avocado Tribe
          </span>
        </div>

        <div className="hidden w-full lg:block lg:w-auto">
          <ul className="flex gap-8 font-semibold text-lg">
            <li className={router.pathname == "/" ? "active" : "deactive"}>
              <Link href="/" className="hover:text-green cursor-pointer ">
                Home
              </Link>
            </li>
            <li
              className={router.pathname == "/search" ? "active" : "deactive"}
            >
              <Link href="/search" className="hover:text-green cursor-pointer ">
                Search
              </Link>
            </li>
            <li className={router.pathname == "/list" ? "active" : "deactive"}>
              <Link href="/list" className="hover:text-green cursor-pointer ">
                List
              </Link>
            </li>
            <li
              className={router.pathname == "/profile" ? "active" : "deactive"}
            >
              <Link
                href="/profile"
                className="hover:text-green cursor-pointer "
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
