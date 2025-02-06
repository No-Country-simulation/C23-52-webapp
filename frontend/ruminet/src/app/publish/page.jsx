"use client";
import { useState } from "react";
import { PostForm } from "./components/PostForm";
import { PublishSuccessful } from "./components/PublishSuccessful";

export default function Publish() {
  const [isSuccessfully, setIsSuccessfully] = useState(false);

  if (isSuccessfully) return <PublishSuccessful/>
  return (
    <div className="flex flex-col justify-center md:pl-50 md:px-52 px-20 md:w-full h-full  mb-10 gap-10">
      <PostForm setIsSuccessfully={setIsSuccessfully} />
    </div>
  );
}
