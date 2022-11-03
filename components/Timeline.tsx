import {
  MagnifyingGlassIcon,
  BoltIcon,
  CodeBracketIcon,
  BeakerIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

import { timeline } from "../data/timeline";

function className(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Timeline = () => {
  return (
    <div className="flex">
      <div className="bg-white dark:bg-gray-900 mx-auto max-w-[80%]">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {timeline.map((timelineItem, timelineItemIndex) => (
            <li className="mb-10 ml-6" key={timelineItem.id}>
              <span className="text-gray-900 dark:text-gray-100 flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-800">
                {timelineItem.type === "search" ? (
                  <MagnifyingGlassIcon className="p-1" />
                ) : timelineItem.type === "action" ? (
                  <BoltIcon className="p-1" />
                ) : timelineItem.type === "code" ? (
                  <CodeBracketIcon className="p-1" />
                ) : timelineItem.type === "dive" ? (
                  <HeartIcon className="p-1" />
                ) : null}
              </span>{" "}
              <div className="flex items-center mb-1">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  {timelineItem.title}
                </h3>
                {timelineItem.important && (
                  <div className="ml-2 bg-red-300 rounded-full h-5 w-5 flex items-center">
                    <ExclamationCircleIcon className="h-4 w-4  m-auto text-red-800" />
                  </div>
                )}
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {timelineItem.date}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {timelineItem.description}{" "}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
