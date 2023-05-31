import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './templates/Header';

// ホーム
import Home from './pages/Home';

// 記録
import Record from './pages/Record';

// 質問
import Question from './pages/Question';
import Create from './pages/question/Create';
import Detail from './pages/question/Detail';

// アカウント認証　↓
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

// プロフィール
import Profile from './pages/Profile';

// 設定
import Account from './pages/setting/Account';
import SettingProfile from './pages/setting/Profile';
import Privacy from './pages/setting/Privacy';
import Search from './pages/Search';

import Error404 from './pages/Error/Error404'
import LoginUserApi from './api/get/LoginUserApi';
import LoginRedirect from './LoginRedirect';
import Game from './pages/game/Game';
import Save from './pages/record/Save';

function Example() {

    LoginRedirect()

    // ログインAPI取得
    const apiData = LoginUserApi()

    if (apiData == false) {
        return (
            <div>
                <BrowserRouter>

                    {/* ヘッダー */}
                    <Header />

                    <Routes>

                        {/* アカウント認証　↓ */}

                        {/* ログイン */}
                        <Route path="/login" element={<Login />} />

                        新規登録
                        <Route path="/register" element={<Register />} />

                        {/* ログイン画面以外でログイン表示 */}
                        <Route path="/" element={<Login />} />
                        <Route path="/:date" element={<Login />} />
                        <Route path='/record' element={<Login />} />
                        <Route path='/question' element={<Login />} />
                        <Route path='/question/follow' element={<Login />} />
                        <Route path='/question/latest' element={<Login />} />
                        <Route path='/question/like' element={<Login />} />
                        <Route path='/question/subject/:id' element={<Login />} />
                        <Route path='/question/subject/follow/:id' element={<Login />} />
                        <Route path='/question/subject/latest/:id' element={<Login />} />
                        <Route path='/question/subject/like/:id' element={<Login />} />
                        <Route path='/question/create' element={<Login />} />
                        <Route path='/question/course/:id' element={<Login />} />
                        <Route path='/question/detail/:id' element={<Login />} />
                        <Route path="/search" element={<Login />} />
                        <Route path="/search/user" element={<Login />} />
                        <Route path="/setting" element={<Login />} />
                        <Route path="/setting/profile" element={<Login />} />
                        <Route path="/setting/privacy" element={<Login />} />
                        <Route path="/profile/:id" element={<Login />} />

                        {/* 404エラー */}
                        <Route path="*" element={<Login />} />

                    </Routes>

                </BrowserRouter>
            </div>
        );
    } else {
        return (
            <div>
                <BrowserRouter>

                    {/* ヘッダー */}
                    <Header />

                    <Routes>


                        {/* ホーム */}
                        <Route path="/" element={<Home />} />
                        <Route path="/:date" element={<Home />} />

                        {/* 記録 */}
                        <Route path='/record' element={<Record />} />
                        <Route path='/record/save' element={<Save />} />

                        {/* 質問 ↓ */}

                        {/* 質問教科未選択 ↓ */}
                        <Route path='/question' element={<Question />} />
                        <Route path='/question/follow' element={<Question />} />
                        <Route path='/question/latest' element={<Question />} />
                        <Route path='/question/like' element={<Question />} />
                        {/* 質問教科未選択 ↑ */}

                        {/* 質問教科指定　↓ */}
                        <Route path='/question/subject/:id' element={<Question />} />
                        <Route path='/question/subject/follow/:id' element={<Question />} />
                        <Route path='/question/subject/latest/:id' element={<Question />} />
                        <Route path='/question/subject/like/:id' element={<Question />} />
                        {/* 質問教科指定　↑ */}

                        {/* 質問作成 */}
                        <Route path='/question/create' element={<Create />} />
                        <Route path='/question/course/:id' element={<Question />} />

                        {/* 質問詳細 */}
                        <Route path='/question/detail/:id' element={<Detail />} />

                        {/* 質問 ↑ */}

                        {/* 検索　↓ */}

                        <Route path="/search" element={<Search />} />
                        <Route path="/search/user" element={<Search />} />

                        {/* 検索　↑ */}

                        {/* ゲーム  ↓ */}

                        <Route path='/game' element={<Game />} />

                        {/* ゲーム  ↑ */}


                        {/* 設定 ↓ */}

                        <Route path="/setting" element={<Account />} />
                        <Route path="/setting/profile" element={<SettingProfile />} />
                        <Route path="/setting/privacy" element={<Privacy />} />

                        {/* 設定 ↑ */}

                        {/* プロフィール */}
                        <Route path="/profile/:id" element={<Profile />} />

                        {/* 404エラー */}
                        <Route path="*" element={<Error404 />} />

                    </Routes>

                </BrowserRouter>
            </div>
        );
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
