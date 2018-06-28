import React, { Component } from 'react';

class Careers extends Component {
    render() {
        return (
            <div id="carriersBlock">
                <div id="carriersRow" className="parallaxSection">
                    <div className="shadowSection">
                        <h2>Кариери</h2>
                        <hr/>
                    </div>
                </div>
                <div id="cariersBlocks">
                    <div className="container">
                        <div className="col-md-2"></div>
                        <div className="carriersBlock col-md-10">
                            <div className="row">
                                <p className="text-center">Ако Вие търсите среда на доказани професионалисти, които са горди да видят резултатите от своите
                                    усилия и ако Вие искате да се усъвършенствате, обичате динамичната и променяща се среда и сте
                                    част от тези, които правят промените реални и успешни, то тогава можете да се присъедините към
                                    нашия преподавателски и административен екип.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Careers;
