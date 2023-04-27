import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Setting from './pages/Setting';
import Header from './templates/Header';
import Record from './pages/Record';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

function Example() {
    return (
        <div>
            <BrowserRouter>

                {/* ヘッダー */}
                <Header />

                <Routes>

                    {/* ホーム */}
                    <Route path="/" element={<Home />} />

                    {/* 記録 */}
                    <Route path='/record' element={<Record />} />

                    {/* 設定 */}
                    <Route path="/setting" element={<Setting />} />

                    {/* アカウント認証　↓ */}

                    {/* ログイン */}
                    <Route path="/login" element={<Login />} />

                    {/* 新規登録 */}
                    <Route path="/register" element={<Register />} />

                    {/* アカウント認証　↑ */}

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
