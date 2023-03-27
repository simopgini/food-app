import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Profile() {
  return (
    <>
      <div className="h-screen mb-8">
        <div className="lg:mt-20">
          <div className="lg:hidden px-4 md:px-8 lg:px-16 mb-6 mt-16 flex justify-between items-center">
            <Link
              href="/"
              className="hover:scale-105 bg-white rounded-lg p-1 shadow-md"
            >
              <HiOutlineChevronLeft className="hover:animate-pulse h-6 w-6" />
            </Link>
            <div className="flex-1 bg-white"></div>
            <div className="flex-auto p-1 font-bold text-xl">Profile</div>
          </div>
          <p className="px-4 py-72 text-center text-xl">
            ⚠️ Work in progress ⚠️{" "}
          </p>
        </div>
      </div>
    </>
  );
}
