
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
 
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <Image
        src="https://static.vecteezy.com/system/resources/previews/010/886/263/non_2x/404-error-page-free-download-free-vector.jpg"
        alt="not-found"
        width={300}
        height={300}
        className=""
      />
     <Link href='/'>
      <Button>Go To Home page</Button>
     </Link>
    </div>
  );
};

export default NotFound;
