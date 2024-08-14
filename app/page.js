import Image from "next/image";
import "./page.css";
import Main from "./components/Main/Main.jsx"

import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Main />
      <Page />
      
    </>

  );
}


 
function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}