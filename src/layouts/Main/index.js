import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
           )
};

export default MainLayout