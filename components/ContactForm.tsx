import React from "react";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-8 flex-1">
      <h2 className="text-3xl font-semibold text-forest ">Contact us</h2>
      <input
        className="flex-1 w-full h-[42px] p-4 rounded-[8px] border-none outline-none transition-all"
        type="text"
        placeholder="Your name"
      />
      <input
        className="flex-1 w-full h-[42px] p-4 rounded-[8px] border-none outline-none transition-all"
        type="email"
        placeholder="Your email"
      />
      <textarea
        placeholder="Your message"
        className="flex-1 w-full p-4 rounded-[8px] border-none outline-none transition-all"
        name=""
        id=""
        cols={30}
        rows={10}
      />
      <Button style="flex-1 w-full">Send</Button>
    </div>
  );
};

export default ContactForm;
