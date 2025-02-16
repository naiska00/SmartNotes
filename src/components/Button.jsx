const Button = ({label}) => {
    return (
        <button className="flex items-center rounded-lg gap-3 bg-gradGreen px-10 py-4">
            {label}
            <img src="/src/assets/icons/Arrow.svg" alt="arrow" 
            width={24}
            height={24}/>
        </button>
    )
}

export default Button