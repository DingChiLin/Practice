const { useState } = React;

const styles = {
  transition: 'all 1s ease-out',
};


const students = [
  {
    name: '王浩宇',
    image: 'static/default.png',
  },
  {
    name: '李婕如',
    image: 'https://cdn.discordapp.com/avatars/955413139699159111/6c5996770c985bcd6e5b68131ff2ba04.webp?size=80'
  },
  {
    name: 'Kelly',
    image: 'https://cdn.discordapp.com/avatars/901665398410330122/98f38b352af7c66c92721bb684d1cd53.webp?size=80'
  },
  {
    name: 'Lisa',
    image: 'static/default.png'
  },
  {
    name: 'Tina',
    image: 'https://cdn.discordapp.com/avatars/767311466025189430/accc4ccbb4d445a5ff8462735acf1750.webp?size=80'
  },
  {
    name: 'Carl',
    image: 'https://cdn.discordapp.com/avatars/954221626227044432/bad5a058af43ea283f6d47b25d6e7dfd.webp?size=80'
  },
  {
    name: 'Jason',
    image: 'https://cdn.discordapp.com/avatars/954322684098007091/c6b0671f27a2109ba2a1282d2e346a5e.webp?size=80'
  },
  {
    name: 'Jimmy',
    image: 'https://cdn.discordapp.com/avatars/729347407988523078/c0df71921446b70a2f3b13ce74031b18.webp?size=80'
  },
  {
    name: 'Thomas',
    image: 'https://cdn.discordapp.com/avatars/954934481716908073/157e517cdbf371a47aaead44675714a3.webp?size=80'
  },
  {
    name: '鄭暐霖',
    image: 'https://cdn.discordapp.com/avatars/692672788917649429/22f89d77e97017b40f171bc38f0f88fc.webp?size=80'
  },
  {
    name: 'Jeff',
    image: 'https://cdn.discordapp.com/avatars/513418381211336706/f7e03a16c56fdf84a49e0d2e6a3a922c.webp?size=80'
  },
  {
    name: '徐新蓉',
    image: 'https://cdn.discordapp.com/avatars/949276599151390731/b881c74724c41384a4483d034795a5a0.webp?size=80'
  },
  {
    name: 'Alfred',
    image: 'https://cdn.discordapp.com/avatars/817045478164267019/94946bc4ee75a11dd96fa8245e28c4ec.webp?size=80'
  },
  {
    name: '趙熙寧',
    image: 'https://cdn.discordapp.com/avatars/864509512166015026/3800c5d7f8c06c114838d460bb2602e1.webp?size=80'
  },
  {
    name: 'Aaron',
    image: 'https://cdn.discordapp.com/avatars/428907813377540107/bba427d55d74ac5b9b9829a36ab89de0.webp?size=80'
  }
];

const studendsWithStyles = students.map((student) => {
  return { ...student, status: 'Good', rotate: '0', transformX: 0, transformY: 0, ui: '0%', flow: '0%' };
});

function App() {
  const [presenters, setPresenters] = React.useState(studendsWithStyles);
  const [isFlip, setIsFlip] = useState(false);
  const [isCut, setIsCut] = useState(false);

  let colCount = 6;

  React.useEffect(() => {
    stack();
  }, []);

  function stack() {
    console.log('stack');
    let shuffleAry = [...presenters];
    let len = shuffleAry.length;
    shuffleAry.map((presenter, idx) => {
      presenter.transformX = idx * 1;
      presenter.transformY = idx * 1;
      presenter.rotate = 0;
    });
    setPresenters(shuffleAry);
  }

  function getWidth() {
    let width = window.innerWidth > 1140 ? 1140 : window.innerWidth;
    return width / colCount;
  }

  function moveUp(time) {
    let len = presenters.length;
    setTimeout(() => {
      let oldPresenters = [...presenters];
      oldPresenters.map((presenter, idx) => {
        let line = Math.floor((len - idx - 1) / colCount);
        presenter.transformY = line * 265;
      });
      setPresenters(oldPresenters);
    }, time);
  }

  function separateS() {
    console.log('separate');
    let len = presenters.length;
    let width = getWidth();

    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        let index = len - i - 1;
        let oldPresenters = [...presenters];
        let oldPresenter = oldPresenters[index];
        oldPresenter.transformX = (i % colCount) * width;
        let line = Math.floor(i / colCount) + 1;
        oldPresenter.transformY = line * 265;
        oldPresenter.rotate = 0;
        setPresenters(oldPresenters);
      }, i * 300);
    }

    moveUp(len * 300 + 600);
  }

  function separateF() {
    console.log('separate');
    let len = presenters.length;
    let width = getWidth();

    let oldPresenters = [...presenters];
    for (let i = 0; i < len; i++) {
      let index = len - i - 1;
      let oldPresenter = oldPresenters[index];
      oldPresenter.transformX = (i % colCount) * width;
      let line = Math.floor(i / colCount) + 1;
      oldPresenter.transformY = line * 265;
      oldPresenter.rotate = 0;
    }
    setPresenters(oldPresenters);

    moveUp(800);
  }

  function shuffle() {
    setIsFlip(true);
    let shuffleAry = [...presenters];
    shuffleAry.map((presenter, idx) => {
      presenter.transformX = idx * 4;
      presenter.transformY = idx * 4;
      presenter.rotate = 0;
    });
    setPresenters(shuffleAry);

    let timer = setInterval(() => {
      let shuffleAry = [...presenters];
      shuffleAry.map((presenter, idx) => {
        presenter.transformX = Math.random() * 800;
        presenter.transformY = Math.random() * 500;
        presenter.rotate = 0;
      });
      setPresenters(shuffleAry);
    }, 200);

    setTimeout(() => {
      clearInterval(timer);
      let width = getWidth();
      let shuffleAry = [...presenters];
      let len = shuffleAry.length;
      for (let i = 0; i < len; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffleAry[i], shuffleAry[j]] = [shuffleAry[j], shuffleAry[i]];
      }
      for (let i = 0; i < len; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffleAry[i], shuffleAry[j]] = [shuffleAry[j], shuffleAry[i]];
      }

      shuffleAry.map((presenter, idx) => {
        let index = len - idx - 1;
        presenter.transformX = (index % colCount) * width;
        let line = Math.floor(index / colCount);
        presenter.transformY = line * 265;
        presenter.rotate = 0;
      });
      setPresenters(shuffleAry);
      // setIsFlip(false);
    }, 4000);
  }

  function cut() {
    if (isCut) {
      return;
    }
    setIsCut(true);
    setIsFlip(true);
    stack();
    let c = Math.floor(Math.random() * 14);
    if (c <= 1) {
      c = 4;
    }
    if (c >= presenters.length - 4) {
      c = 10;
    }
    let len = presenters.length;
    let width = (window.innerWidth - 10) / colCount;
    setTimeout(() => {
      let oldPresenters = [...presenters];
      for (let i = len - 1; i > c; i--) {
        oldPresenters[i].transformX = width + 15 + (i - len);
        oldPresenters[i].rotate = 0;
      }
      setPresenters(oldPresenters);
    }, 500);

    setTimeout(() => {
      let oldPresenters = [];
      let idx = 0;
      for (let i = c; i >= 0; i--) {
        presenters[i].transformX = idx++;
        presenters[i].transformY = idx;
        presenters[i].rotate = 0;
        oldPresenters.push(presenters[i]);
      }
      for (let i = len - 1; i > c; i--) {
        presenters[i].transformX = idx++;
        presenters[i].transformY = idx;
        oldPresenters.push(presenters[i]);
      }
      setPresenters(oldPresenters);
      setIsCut(false);
    }, 1600);
  }

  function spread1() {
    let oldPresenters = [...presenters];
    let len = oldPresenters.length;
    let halfLen = Math.floor(len / 2);
    for (let i = 0; i < len; i++) {
      oldPresenters[i].transformX = i + 180;
      oldPresenters[i].transformY = 40;
      oldPresenters[i].rotate = (i - halfLen) * 4;
    }
    setPresenters(oldPresenters);
  }

  function spread2() {
    let oldPresenters = [...presenters];
    let len = oldPresenters.length;
    let halfLen = Math.floor(len / 2);
    for (let i = 0; i < len; i++) {
      oldPresenters[i].transformX = i * 28;
      oldPresenters[i].transformY = 40;
      oldPresenters[i].rotate = 0;
    }
    setPresenters(oldPresenters);
  }

  async function copy1() {
    return await copy('\r\n');
  }

  async function copy2() {
    return await copy('\r\n\r\n');
  }

  async function copy(joinStr) {
    let text = presenters.map((presenter) => {
      return presenter.name;
    });
    await navigator.clipboard.writeText(text.reverse().join(joinStr));
  }

  // *3001#12345#*

  return (
    <div style={{ width: '1140px' }}>
      <div class="container-header">
        <h1>Back-End #15</h1>
        <div class="row" style={{ paddingBottom: '10px' }}>
          <div class="col-md-3">
            <button type="button" class="btn btn-block btn-info" onClick={stack}>
              Stack
            </button>
          </div>
          <div class="col-md-3">
            <button
              type="button"
              class="btn btn-block btn-info"
              onClick={() => {
                setIsFlip(!isFlip);
              }}
            >
              Toggle
            </button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-block btn-info" onClick={separateS}>
              Separate (slow)
            </button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-block btn-info" onClick={separateF}>
              Separate (fast)
            </button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-block btn-info" onClick={cut}>
              Cut
            </button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-block btn-info" onClick={shuffle}>
              Shuffle
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <button type="button" class="btn btn-block btn-info" onClick={spread1}>
              Spread 1
            </button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-block btn-info" onClick={spread2}>
              Spread 2
            </button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-block btn-info" onClick={copy1}>
              Copy 1
            </button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-block btn-info" onClick={copy2}>
              Copy 2
            </button>
          </div>
        </div>
      </div>
      <div id="container" style={{ 'min-height': '1400px' }}>
        <div class="row" style={{ position: 'relative' }}>
          {presenters.map((presenter, idx) => {
            return (
              <div
                className="col-md-3 flip-box"
                key={presenter.name}
                style={{
                  position: 'absolute',
                  transform: `translateX(${presenter.transformX}px) translateY(${presenter.transformY}px) rotate(${presenter.rotate}deg)`,
                  transition: 'all 1s ease-out',
                  transformOrigin: 'center bottom',
                }}
              >
                <div className={`flip-box-inner ${isFlip ? 'is-flip' : ''}`}>
                  <div className="card card-widget widget-user flip-box-front">
                    <div className="widget-user-header bg-info">
                      <h3 className="widget-user-username">
                        {presenter.name} {presenter.zIndex}
                      </h3>
                      <h5 className="widget-user-desc">Founder &amp; CEO</h5>
                    </div>
                    <div className="widget-user-image">
                      <img className="img-circle elevation-2" src={presenter.image} alt="User Avatar" />
                    </div>
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-sm-4 border-right">
                          <div className="description-block">
                            <h5 className="description-header">{presenter.status}</h5>
                            <span className="description-text">STATUS</span>
                          </div>
                        </div>
                        <div className="col-sm-4 border-right">
                          <div className="description-block">
                            <h5 className="description-header">{presenter.ui}</h5>
                            <span className="description-text">UI</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="description-block">
                            <h5 className="description-header">{presenter.flow}</h5>
                            <span className="description-text">FLOW</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-widget widget-user flip-box-back"
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                      background: 'linear-gradient(0deg, rgba(255,127,35,1) 0%, rgba(253,187,45,1) 100%)',
                      backfaceVisibility: 'hidden',
                      top: '0px',
                      left: '0px',
                    }}
                  >
                    <div className="glow">AppWorks School</div>
                    {/* <img src="static/poker-svgrepo-com.svg" style={{ height: '100%' }}></img> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
