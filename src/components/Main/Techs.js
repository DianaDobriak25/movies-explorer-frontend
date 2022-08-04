import React from 'react';

function Techs() {
    return (
        <section className="techs" id="technology">
            <div className="techs__container">
                <h2 className="techs__project">Технологии</h2>
                <div className="techs__line" />
                <div className="techs__block">
                    <h2 className="techs__technology">7 технологий</h2>
                    <p className="techs__process">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <div className="techs__grid">
                    <div className="techs__form">HTML</div>
                    <div className="techs__form">CSS</div>
                    <div className="techs__form">JS</div>
                    <div className="techs__form">React</div>
                    <div className="techs__form">Git</div>
                    <div className="techs__form">Express.js</div>
                    <div className="techs__form">mongoDB</div>
                </div>
            </div>
        </section>
    );
}
export default Techs;