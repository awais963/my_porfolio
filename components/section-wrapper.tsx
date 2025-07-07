import { GradientHeading } from "./ui/gradient-heading";

interface SectionWrapperProps {
  id: string;
  title: string;
    subTitle: string;

  description: string;
 
  children?: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  subTitle,
  description,
  
  children,
}) => {
  return (
    <section id={id} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
           <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gray-300"/>
          {/* <div className="w-2 h-2 bg-blue-600 rounded-full"/> */}
          <p className="text-sm font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 bg-clip-text text-transparent
 uppercase tracking-wider">{subTitle}</p>
          {/* <div className="w-2 h-2 bg-blue-600 rounded-full"/> */}
          <div className="w-12 h-px bg-gray-300"/>
        </div>
        <h2
  className="text-4xl font-bold mb-6 tracking-wider
    bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
    dark:bg-none dark:text-white
    dark:drop-shadow-[0_0_4px_white]"
>
  {title}
</h2>

          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto font-serif text-lg leading-relaxed italic">
          {description}
        </p>
         
           <div className={`w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600`}></div>
        </div>
         

        {/* Custom Content */}
        {children}
      </div>
    </section>
  );
};
