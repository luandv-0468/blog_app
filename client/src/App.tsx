import { Routes, Route } from "react-router-dom";

import { PostList, Home } from "./components";
import { MainLayout } from "./layouts";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="post" element={<PostList />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
