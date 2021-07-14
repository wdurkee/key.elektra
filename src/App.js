import './App.css';

function App() {

  return (
    <div className="container">
      <video  preload="yes" playsInline autoPlay loop muted className="video" >
        <source src="https://i.imgur.com/xnxwypk.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className='content'>
          <div className='sub-content'>
            <div className='button-container'>
              <a className='portal-button' href='google.com' target="_blank" rel="noreferrer">
                CHI TICKET
              </a>
              <a className='portal-button psi' href='google.com' target="_blank" rel="noreferrer">
                PSI TICKET
              </a>
              <a className='portal-button phi' href='google.com' target="_blank" rel="noreferrer">
                PHI TICKET
              </a>
            </div>
            </div>  
          <div className="powerBottom">
            {/* <div className="logo">
              <a href="https://songcamp.mirror.xyz/mkb-m9GWUCLByETAvCigJ0JIpz4XH8bwNDBtUJBPeFc" target="_blank" rel="noreferrer">
                <ElektraSatellite />
              </a>
            </div> */}
              Powered by <a href="https://twitter.com/songcamp_" target="_blank" rel="noreferrer">Songcamp</a>
          </div>
        </div>
      </div>
    );
  }

export default App;