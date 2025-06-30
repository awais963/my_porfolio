
interface FooterProps {
    isDarkMode: boolean;

}

export const Footer: React.FC<FooterProps> = ({
    isDarkMode,

}) => {
    return (

        <footer className={`py-6 md:py-8 px-6 border-t ${isDarkMode ? "border-white/10" : "border-black/10"}`}>
            <div className="w-full max-w-[96%] 2xl:max-w-[96%] mx-auto text-center">
                <p className={`text-sm md:text-base ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    © 2025 Muhammad Awais. Built with Next.js and modern web technologies.
                </p>
            </div>
        </footer>
    );
};
