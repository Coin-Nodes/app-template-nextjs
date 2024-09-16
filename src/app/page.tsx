"use client";
import HomeContent from "@/components/modules/home/HomeContent";
import React from "react";

import Link from "next/link";

const Home: React.FC = () => {
  return (
    <>
      <HomeContent />
      <Link href="/testpage">Test Page</Link>
    </>
  );
};
export default Home;
