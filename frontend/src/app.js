@@ -19,29 +19,37 @@ function App() {
    const Message = () => {
        return (
            <>
                {
                    message.map((msg, index) => {
                        return (
                            <div className='notification' key={index}>
                                {msg} <span onClick={() => setMessage([...message].filter((_msg,idx) => index !== idx))} className="close-notification" >X</span>
                            </div>
                        )
                    })
                }
                {message.map((msg, index) => {
                    return (
                        <div className="notification" key={index}>
                            {msg}{' '}
                            <span
                                onClick={() =>
                                    setMessage(
                                        [...message].filter(
                                            (_msg, idx) => index !== idx
                                        )
                                    )
                                }
                                className="close-notification"
                            >
                                X
                            </span>
                        </div>
                    )
                })}
            </>
        )
    }
    

    return (
        <div className="App">
            {message ? (
                ReactDOM.createPortal(
                    <Message />,
                    document.getElementById('portal')
                )
            ) : (      ''
            )}
            {message
                ? ReactDOM.createPortal(
                      <Message />,
                      document.getElementById('portal')
                  )
                : ''}
            <Header
                setOverlay={setOverlay}
                loggedin={loggedin}
