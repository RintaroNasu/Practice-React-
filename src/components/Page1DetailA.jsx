import { useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
    const  navigate = useNavigate();
    const onClickBack = () => navigate(-1);
    return(
        <div>
            <h1>Page1DetailAページ</h1>
            <button onClick={onClickBack}>戻る</button>
        </div>
    );
}