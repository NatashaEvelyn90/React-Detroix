import bottomStyle from '../Bottom/Bottom.module.css'

function Bottom() {

    return (
         <section className={`mt-4 ${bottomStyle.sonSec}`}>
            <div className="row d-flex flex-row ms-0 me-0">

                <div className="col-12 col-sm-4 
                 border-top-1 border-end-1 mt-5 infoSmart">
                    <h2>SERVICES</h2>
                        <ul>
                            <li className={`${bottomStyle.serviceList}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sequi?</li>
                            <li className={`${bottomStyle.serviceList}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li className={`${bottomStyle.serviceList}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit at illum quam nesciunt placeat.</li>
                            <li className={`${bottomStyle.serviceList}`}>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                            <li className={`${bottomStyle.serviceList}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nemo dolores nam facilis tenetur?</li>
                            <li className={`${bottomStyle.serviceList}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nemo dolores nam facilis tenetur?</li>
                            <li className={`${bottomStyle.serviceList}`}>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                            <li className={`${bottomStyle.serviceList}`}>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                        </ul>
                        <button type="submit">MORE</button>
                </div>

                <div className="col-12 text-center col-sm-4 
                text-sm-start border-top-1 border-end-1 mt-5 infoSmart">
                    <h2>OPPORTUNITIES</h2>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus iure exercitationem culpa nihil perferendis quisquam et quae reiciendis ipsam impedit laborum quis quo incidunt inventore, unde doloremque, pariatur dolores aliquam.</p>

                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt assumenda quasi excepturi inventore ipsam obcaecati recusandae, esse veritatis minus nihil officiis, distinctio reprehenderit et doloribus similique exercitationem incidunt nam! Ullam!</p>
                    <button type="submit">MORE</button>
                </div>

                <div className="col-12 text-center col-sm-4 
                text-sm-start border-top-1 border-end-1 mt-5 infoSmart">
                    <h2>NEWS</h2>
                    <div className="d-inline-flex">
                        <div className={`${bottomStyle.dateOne} mb-2 me-3`}>
                        21<br />NOV
                    </div>
                        <div className="mt-2">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nulla?</p>
                        </div>
                </div>    

                <div className="d-inline-flex">
                    <div className={`${bottomStyle.dateTwo} mb-3 me-3`}>
                        09<br />NOV
                    </div>
                        <div>
                            <h4>Lorem ipsum dolor sit amet.
                            </h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, architecto.</p>   
                        </div>
                </div>

                <div className="d-inline-flex">
                    <div className={`${bottomStyle.dateThree} mb-3 me-3`}>17<br />NOV</div>
                        <div>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, aperiam!</p>   
                        </div>
                </div>
                <button type="submit">MORE</button>
            </div>
            </div>
        </section>
    )
}

export default Bottom