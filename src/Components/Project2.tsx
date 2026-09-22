import "./Project2.css";
import worldlogo from "../assests/world-globe-earth-map-png.webp";
import location from "../assests/location-icon-design-vector.webp"
import k2 from "../assests/k2-hero.webp";
import mountfuji from "../assests/mt-fuji-sunrise.webp";

export function Project2() {
    return (
        <>
            <header>
                <img src={worldlogo} alt="World icon" width="100" height="100" />
                <h1>My Travel Journal</h1>
            </header>
        </>
    );
}
export function Entry() {
    return (
        <>
        <article className="journal-entry">
            <div className="main-image-container">
<img className="main-image" src={k2} alt="K2"  />
</div>
<div>
    <img className="location-icon" src={location} alt="Location icon" width={35} height={35} />
    <span>Pakistan</span>
    <a href="https://en.wikipedia.org/wiki/K2" target="_blank" rel="noopener noreferrer">View on Wikipedia</a>
    <h2>K2 Mountain</h2>
    <p>12 January 2021 - 15 January 2021</p>
    <p>K2 is the second-highest mountain in the world, located in the Karakoram range.K2, also known as Mount Godwin-Austen,[3][5][6] at 8,611 metres (28,251 ft) above sea level, is the second-highest mountain on Earth, after Mount Everest at 8,849 metres (29,032 ft).[3] It lies in the Karakoram range, partially in the Gilgit-Baltistan region of Pakistan-administered Kashmir and partially in the China-administered Trans-Karakoram Tract in the Taxkorgan Tajik Autonomous County of Xinjiang</p>
</div>
        </article>
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={mountfuji} alt="Mount Fuji" />
            </div>
            <div>
                <img className="location-icon" src={location} alt="Location icon" width={35} height={35} />
                <span>Japan</span>
                <a href="https://en.wikipedia.org/wiki/Mount_Fuji" target="_blank" rel="noopener noreferrer">View on Wikipedia</a>
                <h2>Mount Fuji</h2>
                <p>12 January 2021 - 15 January 2021</p>
                <p>Mount Fuji is the highest mountain in Japan, standing at 3,776 meters (12,389 feet) above sea level. It is an active stratovolcano that last erupted in 1707.It is an active volcano, although it has been quiet since 1707. Japan closely monitors volcanic activity. The mountain can also have severe weather, particularly outside the climbing season.</p>
            </div>
        </article>
        </>
    );
}
