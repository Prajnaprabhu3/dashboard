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
        <div className={`flex items-center border text-sm rounded-md px-2 py-0 ${customClass}`} onClick={onClick}>
            <p className="">{prefixLogo}</p>
            <p className="">{buttonText} </p>
          
        </div>
    );
};



export default Button;