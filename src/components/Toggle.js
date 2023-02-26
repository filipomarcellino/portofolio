import Image from "next/image";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineDownCircle,
  AiOutlineLink,
  AiOutlineUpCircle
} from "react-icons/ai";
import SlideDown from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import StackItem from "./StackItem";

function Toggle(props) {
  const { data, theme } = props;
  const [show, setShow] = useState(true);

  const iconStyle = {
    color: "white",
    marginLeft: "3px"
  };

  return (
    <div className="mt-3 text-gray-200">
      <div className="bg-[#393c43] w-11/12 rounded-lg mx-auto">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <div className="text-left px-3 py-2 text-lg text-golden font-semibold">
            {data.name}{" "}
            <span className="italic text-white font-light">
              {" "}
              - {data.subHeader}
            </span>
          </div>
          {show ? (
            <AiOutlineUpCircle className="mt-2 mr-4 text-3xl" />
          ) : (
            <AiOutlineDownCircle className="mt-2 mr-4 text-3xl" />
          )}
        </div>
        <SlideDown>
          {show ? (
            <div className="p-8 pt-4 text-left">
              {data.imageURL && (
                <Image
                  className="rounded-lg"
                  src={data.imageURL}
                  height={800}
                  width={800}
                />
              )}
              <p className="mt-4">{data.description}</p>
              <div className="flex justify-between text-4xl mt-4">
                <div className="flex">
                  {data.stack.map((stackItem) => (
                    <StackItem stack={stackItem} theme={theme} />
                  ))}
                </div>
                <div className="flex">
                  <a href={data.links.github}>
                    {" "}
                    <AiFillGithub className="mr-2" />
                  </a>
                  {data.links.link && (
                    <a href={data.links.link}>
                      <AiOutlineLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </SlideDown>
      </div>
    </div>
  );
}

export default Toggle;
