import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <div id="teamBlock">
                <div id="teamRow" className="parallaxSection">
                    <div className="shadowSection">
                        <h2>Екип</h2>
                        <hr />
                    </div>
                </div>
                <div id="teamBlocks" className="row">
                    <div className="container">
                        <div className="col-md-2"></div>
                        <div className="teamBlock col-md-10">
                            <p>Екип</p>
                            <p>Стани част от нашия СинергиченЕкип!</p>
                        </div>
                        <a id="foreignLanguagesExpertClick">Експерт Чуждоезиково обучение</a>
                        <div id="foreignLanguagesExpert" className="row">
                            <p className="font-bold">Преподавателски екип</p>
                            <p>Ти си полиглот и ти се отдават чужди езици, обичаш работата с деца и възрастни, преподаването е твое
                            призвание и умееш да работиш в екип? Присъедини се към нашия СинергиченЕкип.</p>
                            <p className="font-bold">Отдел Преподавателски екип</p>
                            <p>Предлагаме ти интересна и предизвикателна работа в обучителна организация с доказани професионалисти.
                                Ако ти си горд да виждаш резултатите от своите усилия и искаш да се усъвършенстваш, обичаш динамичната
                                и променяща се среда и желаеш да бъдеш част от тези, които правят промените реални и успешни - може
                                би ти си точният човек! При нас ще имаш възможност за професионално развитие, като всеки ден ще научаваш
                            нещо ново. Очакват те мнозина фирмени обучения и атрактивно заплащане.</p>

                            <p className="font-bold">От теб очакваме:</p>
                            <ul>
                                <li>Да имаш завършено подходящо образование;</li>
                                <li>Да притежаваш компютърна грамотност;</li>
                                <li>Да умееш да комуникираш с клиенти;</li>
                                <li>Да познаваш отлично предлаганите от компанията услуги;</li>
                                <li>Да си зареден с желание за професионално развитие и работа в екип;</li>
                                <li>Готовност за работа по проекти.</li>
                            </ul>

                            <p className="font-bold">Ще бъдеш крачка пред другите кандидати, ако:</p>
                            <ul>
                                <li>Познаваш основните;</li>
                                <li>Умееш да работиш с интерактивна техника;</li>
                                <li>Имаш опит на предишна подобна длъжност.</li>
                            </ul>

                            <p className="font-bold">Основните ти задачи в СИНЕРГИЯ ПЛЮС ще бъдат:</p>
                            <ul>
                                <li>Да отговаряш на технически въпроси, свързани с хостинг услугите по е-мейл, телефон и посредством
                                “ticket” система;</li>
                                <li>Да съдействаш на клиентите при решаването на всеки един техен казус, свързан с услугата;</li>
                                <li>Да прехвърляш запитвания към отдел за техническа поддръжка от второ ниво, търговски отдел и към системните
                                    администратори.
                            </li>
                                <li>Да проследиш дали всеки казус, с който си се заел, е решен до края.</li>
                            </ul>
                        </div>
                        <div className="row">
                            <p className="font-bold">Бонус:</p>
                            <p>Гъвкаво работно време, съобразено с другите ти работни ангажименти. Тук ще те посрещне СинергиченЕкип,
                            винаги готов за екипна работа и приключения! </p>
                        </div>
                    {/* <a id="otherClick">Друго</a>
                        <div id="other" className="row">
                            бла-бла
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
