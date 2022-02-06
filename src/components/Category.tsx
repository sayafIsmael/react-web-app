interface Props {
    image?: string;
    title?: string;
    background?: string;
}

export default (props:Props) => {
    const { image, title, background } = props
    return (
    <div className="w-full rounded-lg cursor-pointer p-3" style={{ backgroundColor: background, height: 94 }}>
        <img className="mb-4" src={image} />
        <div className="flex items-center justify-between">
            <p className="text-gray-500">{title}</p>
            <i className="fas fa-chevron-right text-xs text-gray-500"></i>
        </div>
    </div>
)
};