import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    
    <button disabled={pending} type="submit" className="text-white bg-black hover:bg-black/80 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-black py-2 xs:py-3 px-12 sm:px-16 md:px-24 w-full rounded-[40px]">
      <span className="font-raleway text-xl leading-normal font-medium">Submit</span>
      
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {/* Submit{" "} */}
          {/* <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "} */}
        </>
      )}
    </button>
  );
}
