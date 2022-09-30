export type ButtonProps = {
    onClick?(): void;
    buttonText: string;
    customClass?: string;
    prefixLogo?: React.ReactElement;
    suffixLogo?: React.ReactElement;
    children?: React.ReactNode;
};

const Button = ({ onClick, prefixLogo, suffixLogo, buttonText, customClass }: ButtonProps) => {
    return (
        <div className={`flex items-center text-sm border border-gray-300 px-3 py-0.5 rounded-md ${customClass}`} onClick={onClick}>
            <p className="">{prefixLogo}</p>
            <p className="">{buttonText} </p>
          
        </div>
    );
};



export default Button;