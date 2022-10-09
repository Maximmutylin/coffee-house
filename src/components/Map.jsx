
export const Map = () => {
    return (
        <div className="map">
            <div className="map__container">
                <div className="map__body">
                    <div className="map__info">
                        <div className="map__item">
                            <div className="map__name">Working Hour</div>
                            <div className="map__text">Sunday to Saturday 09:00 AM to 11:00 PM</div>
                        </div>
                        <div className="map__item">
                            <div className="map__name">Location</div>
                            <div className="map__text">Street - 127, New York,<br /> United States <br /> 546544</div>
                        </div>
                        <div className="map__item">
                            <div className="map__name">Contact us </div>
                            <div className="map__text">+123456789</div>
                            <div className="map__text">hey@yourdomain.com</div>
                        </div>

                    </div>
                    <div className="map__map">

                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5ac891a808fa2561e783944ab7394cfabac36d347221793b22896158914c033d&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
                    </div>

                </div>

            </div>

        </div>
    )
}
