import React from 'react';
import ReactDOM from 'react-dom';
import Header from './templates/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Setting from './views/Setting';

function Example() {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    {/* ホーム */}
                    <Route path="/" element={<Home />} />

                    {/* 設定 */}
                    <Route path="/setting" element={<Setting />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
