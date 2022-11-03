"use client";
import Image from "next/image";
import { useState } from "react";

export const Hero = () => {
  const [online, setOnline] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div>
              {online ? (
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold tracking-widest text-blue-800 uppercase rounded-full bg-blue-100 dark:bg-blue-700 dark:text-blue-100">
                  Reachable
                </span>
              ) : (
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold tracking-widest text-red-800 uppercase rounded-full bg-red-100 dark:bg-red-700 dark:text-red-100">
                  Unreachable
                </span>
              )}
            </div>
            <div className="mt-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                <span className="block xl:inline">
                  Your humble and friendly
                </span>{" "}
                <span className="block text-blue-600 xl:inline">
                  web3 lover{" "}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl md:mt-5 md:text-2xl dark:text-gray-400">
                Just a guy who loves to build things on the web3 stack. I&apos;m
                currently working on{" "}
                <span className="text-gray-800 dark:text-gray-200 line-through">
                  {" "}
                  [REDACTED]
                </span>
                .
                <br />
                I&apos;m just a guy. (sharing some of my thoughts on web3 and
                other things on my thoughts page)
              </p>
            </div>
            <div className="mt-10 sm:mt-12"></div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative lg:col-span-6">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
              <Image
                className="w-full rounded-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/2275-dead.png"
                alt=""
                width={490}
                height={370}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
