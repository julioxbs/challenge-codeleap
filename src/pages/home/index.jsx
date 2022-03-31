import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import './home.css';

export default function Home() {
    const navigate = useNavigate();
    let timer;
    
    useEffect(() => {
        timer = setTimeout(() => {
            nextPage()
        }, 5000);
    });

    const nextPage = () => {
        clearTimeout(timer);
        navigate("/signin");
    }

    return(
        <div className="content__home">
            <div className="banner" onClick={() => nextPage()}>
                <img src="/icons/codeleap_logo.svg" alt="logo" />
            </div>
        </div>
    );
}