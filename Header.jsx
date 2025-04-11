
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex bg-[url('/logo/spring4.jfif')] bg-cover lg:h-64 w-full ">
        <div>
          <nav>
            <div className="flex gap-2 lg:flex lg:p-2 lg:m-2 lg:text-cyan-900 lg:w-auto text-stone-900 flex-wrap w-fit h-full">
              <div className="border-b-2 border-violet-950 lg:w-fit lg:border-0 lg:ml-2">
                <Link href="/" className="rounded-md text-xs lg:text-xl">
                  صفحه اصلی
                </Link>
              </div>
              <div className="border-b-2 border-violet-950 lg:w-fit lg:border-0 lg:ml-2">
                <Link href="/admin" className="rounded-md text-xs lg:text-xl">
                  مدیر
                </Link>
              </div>
              <div className="border-b-2 border-violet-950 lg:w-fit lg:border-0 lg:ml-2">
                <Link
                  href="/contact-admin"
                  className="rounded-md text-xs lg:text-xl"
                >
                  تماس با ما
                </Link>
              </div>
              <div className="border-b-2 border-violet-950 lg:w-fit lg:border-0 lg:ml-2">
                <Link
                  href="/about-admin"
                  className="rounded-md text-xs lg:text-xl"
                >
                  درباره ما
                </Link>
              </div>
              <div className="border-b-2 border-violet-950 lg:w-fit lg:border-0 lg:ml-2">
                <Link href="/login" className="rounded-md text-xs lg:text-xl">
                  ورود
                </Link>
              </div>
              <div className="border-b-2 border-violet-950 lg:w-fit lg:border-0 lg:ml-2">
                <Link href="/signup" className="rounded-md text-xs lg:text-xl">
                  ثبت نام
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row-reverse lg:mr-auto lg:w-fit mr-auto content-center">
          <div className="mr-auto m-0 lg:w-fit lg:ml-0 lg:self-start">
            <Image
              className="lg:w-44 lg:mr-auto"
              src="/logo/newlogo.svg"
              alt="logo"
              width={40}
              height={50}
            />
          </div>
          <div className="font-black lg:w-fit text-xs lg:mr-0 grow w-fit h-fit flex items-end mb-3 justify-end lg:justify-center lg:self-center ">
            <h1 className="animate-pulse jiro p-1 lg:text-2xl lg:mr-10 lg:w-52 w-fit text-nowrap text-cyan-500">
              جیرفت آنلاین
            </h1>
          </div>
        </div>
      </div>
      <hr className="h-0.5 bg-fuchsia-600" />
    </header>
  );
};

export default Header;
