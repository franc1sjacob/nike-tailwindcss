interface ButtonProps {
  label: string;
  iconUrl?: string;
}

// const Button: React.FC<ButtonComponentProps> = ({ label, iconUrl }) => {
const Button = ({ label, iconUrl }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
