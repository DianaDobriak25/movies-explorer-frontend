import React from 'react';

function AboutProject() {
    return (
        <section className="about-project" id="aboutProject">
            <h2 className="about-project__plan">О проекте</h2>
            <div className="about-project__line" />
            <div className="about-project__grid">
                <h2 className="about-project__subject">Дипломный проект включал 5 этапов</h2>
                <h2 className="about-project__subject">На выполнение диплома ушло 5 недель</h2>
                <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="about-project__movement">
                <div className="about-project__week">1 неделя</div>
                <div className="about-project__month">4 недели</div>
                <p className="about-project__technology">Back-end</p>
                <p className="about-project__technology">Front-end</p>
            </div>
        </section>
    );
}
export default AboutProject;