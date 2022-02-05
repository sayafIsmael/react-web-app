export default ({ image, title, descriptiom, users }) => (
    <div className="cursor-pointer flex my-4 items-center">
        <div className="w-3/12">
            <img src={image} />
        </div>
        <div className="px-2 w-10/12">
            <p className="font-medium text-gray-600">{title}</p>
            <p className="text-sm text-gray-400">{descriptiom}</p>
            <p className="text-sm text-primary">{users} users</p>
        </div>
        <div>
            <i className="fas fa-chevron-right text-gray-500"></i>
        </div>
    </div>
);