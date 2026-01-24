export const Heading1 = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <h1 className={` lg:text-7xl text-2xl font-bold ${classname}`}>{text}</h1>
    )
}
export const Heading2 = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <h1 className={` ${classname} lg:text-6xl font-bold`}>{text}</h1>
    )
}
export const Heading2A = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <h1 className={` ${classname} text-4xl font-bold`}>{text}</h1>
    )
}
export const Heading2B = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <h1 className={` ${classname} text-3xl font-bold`}>{text}</h1>
    )
}
export const Heading3 = ({ text,classname }: { text: string,classname?:string }) => {
    return (
        <h1 className={`${classname}text-sm font-semibold lg:text-2xl`}>{text}</h1>
    )
}
export const Heading4 = ({ text,classname }: { text: string,classname?:string }) => {
    return (
        <h1 className={`${classname} font-semibold text-lg`}>{text}</h1>
    )
}
export const ParagraphText = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <p className={`lg:text-base text-sm ${classname}`}>{text}</p>
    )
}

export const NavText = ({ text, classname }: { text: string, classname: string }) => {
    return (
        <h1 className={`text-3xl font-bold ${classname}`}>{text}</h1>
    )
}