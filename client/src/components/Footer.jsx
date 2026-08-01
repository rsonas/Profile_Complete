import "../styles/Footer.css";

//creates footer stored at bottom of page
export default function Footer() {
    return (

        <footer className="footer">

            <div className = "footerRow">
            <p className="footerItem">Aislinn Richardson</p>
            <p className="footerItem">Developer </p>
            <p className="footerItem">© {new Date().getFullYear()} All Rights reserved</p>

            </div>

        </footer>
        
    );
}