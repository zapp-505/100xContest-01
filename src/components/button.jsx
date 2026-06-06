
const Button = ({
    disabled,
    onClick,
    children
}) => {
    return (
        <span onClick={onClick} className={`px-32 py-8 rounded-2xl text-4xl cursor-pointer text-white ${disabled ? "bg-blue-300" : "bg-gray-600"}`}>
            {children}
        </span>
    )
}

export default Button