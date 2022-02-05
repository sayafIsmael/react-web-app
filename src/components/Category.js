export default ({ image, title, background }) => (
    <div className="w-full rounded-lg cursor-pointer p-3" style={{backgroundColor: background, height: 94 }}>
        <img className="mb-4" src={image}/>
        <div className="flex items-center justify-between">
            <p className="text-gray-500">{title}</p>
            <i class="fas fa-chevron-right text-xs text-gray-500"></i>
        </div>
    </div>
);