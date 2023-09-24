import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { Page1 } from '../components/Page1';
import { Page1DetailA } from '../components/Page1DetailA';
import { Page1DetailB } from '../components/Page1DetailB';
import { Page2 } from '../components/Page2';
import { UrlParameter } from '../components/UrlParameter';
import { Page404 } from '../components/Page404';

export const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />}/>
            <Route path="/page1/detailA" element={<Page1DetailA />} />
            <Route path="page1/detailB" element={<Page1DetailB />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page2/:id" element={<UrlParameter />} />
            <Route path="*" element={<Page404 />} />

        </Routes>
    )
}