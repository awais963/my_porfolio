import { GradientHeading } from "./ui/gradient-heading";

interface SectionWrapperProps {
  id: string;
  title: string;
  description: string;
  fromColor: string;
  toColor: string;
  isDarkMode?: boolean;
  children?: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  description,
  fromColor,
  toColor,
  isDarkMode = false,
  children,
}) => {
  return (
    <section id={id} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20`} />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <GradientHeading text={title} fromColor={fromColor} toColor={toColor} />
          <p className={`text-xl max-w-3xl mx-auto mt-6 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
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
