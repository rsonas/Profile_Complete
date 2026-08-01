import "../styles/Card.css";

//creates a reusable react card to display information 
export default function Card ({ header, media, body, footer }) {
    return (

        <div className = "cardContainer">
            {/* checks to see if there is a header. If not, does not render it*/}
            {header && (
                <div className="cardHeader">
                    {header}
                </div>
            )}

            {media && (
                <div className="cardMedia">
                    {media}

                </div>
            )}

            {body && (
                <div className="cardBody">
                    {body}
                </div>
            )}

            {footer && (
                <div className="cardFooter">
                    {footer}
                </div>
            )}
        </div>

    );
}