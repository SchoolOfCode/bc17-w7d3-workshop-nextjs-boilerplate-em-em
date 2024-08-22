import Image from "next/image";
import "./page.css";

import founders from "../../public/images/founders.png";

export default function Founders() {
  return (
    <Image className="founders" src={founders} width={696} height={4084} />
  );
}
