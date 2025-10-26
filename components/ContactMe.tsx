import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sunil.belde102@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi, my name is ${formData.name}.\n\n${formData.message}`)}`;
    reset(); // Clear form after submission
  };

  return (
    <div className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center py-10 pb-20">
      <h3 className="absolute top-12 md:top-16 uppercase tracking-[10px] text-textSecondary text-lg md:text-xl">
      Contact
      </h3>
      <div className="flex flex-col space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-3 2xl:space-y-4 w-full max-w-2xl mt-8 md:mt-12">
      <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center">
        I'd love to hear from you.{" "}
        <span className="decoration-darkGreen-40 underline">Reach out anytime.</span>
      </h4>


      <div className="space-y-1 md:space-y-2 2xl:space-y-3" role="group" aria-label="Contact information">
        <a
        href="tel:+19452444371"
        className="flex items-center space-x-4 justify-center hover:text-darkGreen transition-colors group"
        aria-label="Call (945) 244-4371"
        >
        <PhoneIcon className="text-darkGreen h-6 w-6 motion-safe:animate-pulse motion-reduce:animate-none group-hover:scale-105 transition-transform" aria-hidden="true" />
        <p className="text-md md:text-lg lg:text-xl">
          <span className="sr-only">Phone: </span>
          (945) 244-4371
        </p>
        </a>
        <a
        href="mailto:sunil.belde102@gmail.com"
        className="flex items-center space-x-4 justify-center hover:text-darkGreen transition-colors group"
        aria-label="Email sunil.belde102@gmail.com"
        >
        <EnvelopeIcon className="text-darkGreen h-6 w-6 motion-safe:animate-pulse motion-reduce:animate-none group-hover:scale-105 transition-transform" aria-hidden="true" />
        <p className="text-md md:text-lg lg:text-xl">
          <span className="sr-only">Email: </span>
          sunil.belde102@gmail.com
        </p>
        </a>
        <div className="flex items-center space-x-4 justify-center">
        <MapPinIcon className="text-darkGreen h-6 w-6 motion-safe:animate-pulse motion-reduce:animate-none" aria-hidden="true" />
        <p className="text-md md:text-lg lg:text-xl">
          <span className="sr-only">Location: </span>
          Chicago, IL
        </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 w-full max-w-md mx-auto"
      >
        <div className="flex flex-col md:flex-row md:space-x-1 space-y-3 md:space-y-0 w-full">
        <div className="flex flex-col w-full md:flex-1">
          <label htmlFor="name" className="text-sm text-textSecondary mb-1 ml-1">
          Name
          </label>
          <input
          id="name"
          {...register("name")}
          className="contactInput w-full"
          type="text"
          />
        </div>
        <div className="flex flex-col w-full md:flex-1">
          <label htmlFor="email" className="text-sm text-textSecondary mb-1 ml-1">
          Email
          </label>
          <input
          id="email"
          {...register("email")}
          className="contactInput w-full"
          type="email"
          />
        </div>
        </div>
        <div className="flex flex-col">
        <label htmlFor="subject" className="text-sm text-textSecondary mb-1 ml-1">
          Subject
        </label>
        <input
          id="subject"
          {...register("subject")}
          className="contactInput"
          type="text"
        />
        </div>
        <div className="flex flex-col">
        <label htmlFor="message" className="text-sm text-textSecondary mb-1 ml-1">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="contactInput min-h-[100px] resize-y"
          rows={3}
        />
        </div>
        <button
        type="submit"
        className="bg-lightGreen py-2 md:py-4 px-8 rounded-lg text-white font-bold text-md
               hover:bg-darkGreen transition-all duration-300
               focus:outline-none focus:ring-4 focus:ring-lightGreen/50
               disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
        aria-label="Send message via email"
        >
        {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      </div>
    </div>
  );
}
