import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  return (
    <div id="contact" className="w-full lg:h-screen pt-5">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase my-4 text-2xl tracking-widest text-[#FE7F2D] border-b border-[#F5F3E0] w-[15%]">
          Contact
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="text-center col-span-3 bg-[#00507A] shadow-md shadow-[#000] lg:col-span-2 w-full h-full rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-200"
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="hands pointing at a laptop"
                />
              </div>
              <div>
                <h2 className="uppercase font-light py-2 tracking-wide">
                  James Kirkwood
                </h2>
                <p className="text-xl">Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions.
                  Let&apos;s get in touch.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me.</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full cursor-pointer hover:scale-150 ease-in duration-200 text-[#5DA9E9]">
                    <a
                      href="https://www.linkedin.com/in/jimjamesjimathy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin size={55} />
                    </a>
                  </div>
                  <div className="rounded-full cursor-pointer hover:scale-150 ease-in duration-200 text-[#000]">
                    <a
                      href="https://github.com/jimjamesjimathy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={55} />
                    </a>
                  </div>
                  <div className="rounded-full cursor-pointer hover:scale-150 ease-in duration-200 text-[#D62828]">
                    <a href="mailto:jamesalanmikal@gmail.com">
                      <AiOutlineMail size={55} />
                    </a>
                  </div>
                  <div className="rounded-full cursor-pointer hover:scale-150 ease-in duration-200 text-[#329F5B]">
                    <a
                      href="https://docs.google.com/document/d/1MkLXcZHILtbDueB12UcxNuuZ8e6u8SkRx-UiDRwiZRI/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFillPersonLinesFill size={55} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Left ends */}

          {/* Right */}
          <div className="bg-[#00507A] col-span-3 w-full h-auto shadow-md shadow-[#000] rounded-xl lg:p-4">
            <div className="p-4">
              <form className="text-[#000] font-bold" onSubmit={handleSubmit} action='https://formspree.io/f/xwkyjleo' method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-[#FE7F2D] font-bold uppercase text-sm py-2"
                    >
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#FE7F2D] font-bold uppercase text-sm py-2">
                      Number (optional)
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500"
                      type="tel"
                      id="number"
                      name="number"
                      placeholder="Number"
                    />
                    <ValidationError
                      prefix="Number"
                      field="number"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-[#FE7F2D] font-bold uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-[#FE7F2D] font-bold uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-500"
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-[#FE7F2D] font-bold uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-500"
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Write you message here"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  className="w-full p-4 mt-4 text-lg font-bold bg-[#D64045] hover:bg-[#E6898C] ease-in duration-200"
                  type="submit"
                  onClick={() => window.location.reload(true)}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          {/* Right ends */}
        </div>
      </div>
      <div className="flex justify-center mt-[-35px]">
        <Link href="/">
          <div className="rounded-full cursor-pointer hover:scale-110 ease-in duration-200 text-[#FE7F2D] bg-[#00507A] p-5 border-2">
            <HiOutlineChevronDoubleUp size={35} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
