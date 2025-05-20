import logo from '../logo.svg'
import '../App.css'
import '../styles.css'

export default function App() {
    return (
        // Create a parent object
        <div className="App"> {/* !!! */}
            {/* Create a header object that will contain a logo and a link */}
            <header className="App-header">
                {/* Add an image with an alternate text */}
                <img src={logo} className="App-logo" alt="logo"/>
                {/* Hyperlink goes here */}
                <a
                    className="App-link"
                    href="https://react.org"
                    target="_blank" // open in new tab
                    rel="noopener noreferrer"  //instructs the browser, when navigating to the target resource, to omit the Referer header and otherwise leak no referrer information
                >
                    Learn React
                </a>
            </header>
            {/* Create a footer object */}
            <footer className="footer">
                <p className='footer'>Footer content</p>
            </footer>
        </div>
    )
}