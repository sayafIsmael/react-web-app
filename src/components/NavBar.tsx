import { useNavigate } from 'react-router-dom';

interface Props {
    title?: String;
}

export default function Navbar(props: Props) {
    const { title } = props;
    const history = useNavigate();

    return (
        <div className="w-full bg-gray-100 h-12 flex justify-center items-center border-b-2 border-gray bg-navbar">
            {!title && <img src="/svg/homepage-logo.svg" className="h-6" />}
            {title && <div className="w-full flex items-center">
                <div className="w-11/12">
                    <p className="text-center">{title}</p>
                </div>
                <div className="w-1/12 cursor-pointer bg-gray-light rounded-full w-6 h-6 flex items-center justify-center" onClick={()=> history('/login')}>
                    <i className="fas fa-times text-gray-500 text-btnBlack"></i>
                </div>
            </div>
            }
        </div>
    );
}