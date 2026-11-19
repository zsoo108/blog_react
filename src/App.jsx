
import './App.css';

import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [title, setTitle] = useState(['경기도', '강원도', '충청도']);
  const [clickup, setClickup] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="App">

        <div className="black-nav">
          <h4 style={{ color: 'red', fontSize: '20px' }}>
            React Blog
          </h4>
        </div>

        {
          title.map((tit, i) =>
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal);
              }}>
                {tit}
                <span onClick={(e) => {
                  let copy = [...clickup];
                  copy[i] = clickup[i] + 1;
                  setClickup(copy);
                  e.stopPropagation();
                }}>
                  👍
                </span> {clickup[i]}
              </h4>

              <p>11월 19일 발행</p>

              <button onClick={() => {
                let copy = [...title];
                copy[0] = '제주도';
                setTitle(copy);
              }}>
                제목 변경
              </button>
            </div>
          )
        }

        <button onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}>
          제목 정렬
        </button>

        {modal === true && <Modal />}

      </div>
    </>
  );
}

export default App;
