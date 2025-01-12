import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import CustomButton from "@/components/CustomButton";
import EmailIcon from "@/assets/icons/email.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{backgroundImage: `url(${grainImage.src})`}}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Let's create something amazing together</h2>
              <p className="text-sm md:text-base mt-2 text-gray-900">Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.</p>
            </div>
            <div>
              <a href="mailto:agustinperti06@gmail.com">
                <CustomButton
                  text="Contact Me"
                  icon={EmailIcon}
                  wrapperClassName="h-12 w-max rounded-xl"
                  className="rounded-xl px-6 text-white"
                  variant="shimmer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
