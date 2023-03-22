import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React from "react";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
    const isPepeGPT = message.user.name === "PepeGPT";

  return (
    <div className={`py-5 text-[#afda9e] ${isPepeGPT && "bg-[#7cb665] text-[#121212]"}`}>
      <div className="flex space-x-5 px-6 max-w-2xl mx-auto">
        <Image
          src={message.user.image}
          width={200}
          height={200}
          className="rounded-full w-10 h-10"
          alt="propic"
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
