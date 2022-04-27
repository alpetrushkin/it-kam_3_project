import React from "react";
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src="https://w7.pngwing.com/pngs/184/1023/png-transparent-logo-nelumbo-nucifera-lotus-miscellaneous-purple-text.png" alt=""/>
        </header>
        <nav className='nav'>
            <div>
                <a href="">Profile</a>
            </div>
            <div>
                <a href="">Messages</a>
            </div>
            <div>
                <a href="">News</a>
            </div>
            <div>
                <a href="">Music</a>
            </div>
            <div>
                <a href="">Settings</a>
            </div>
        </nav>
        <div className='content'>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=08f6e64ea1f570cb74cb30451ca99d55-4825130-images-thumbs&n=13&exp=1" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
            </div>
    </div>
  );
}

export default App;
