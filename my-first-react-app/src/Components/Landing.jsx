import img from "../assets/image.png";
import "./Landing.css";
export default function Landing() {
    return (
        <div className="landing">
            <nav className="nav-bar">
                <div className="left">
                    <div id="logo">Logo</div>
                    <ul>
                        <li>Section-1</li>
                        <li>Section-2</li>
                        <li>Section-3 </li>
                    </ul>
                </div>
                <div>Hamburger</div>
            </nav>
            <section>
                <div className="left-main-right">
                    <h2>
                        Turn images into AI to get useful insights with no code
                    </h2>
                    <p>
                        Drag-and-drop your data, do some tweaks — and voilà, a
                        new powerful AI tool is born
                    </p>
                    <div className="button-container">
                        <button>Start for free</button>
                        <button>GitHub</button>
                    </div>
                </div>
                <div className="right-main-right">
                    <img src={img} alt="" />
                </div>
            </section>
        </div>
    );
}
#