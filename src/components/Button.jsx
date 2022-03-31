export default function Button({type, children, className, style}) {
    return(
        <button style={style} className={className} type={type}>
            {children}
        </button>
    );
}