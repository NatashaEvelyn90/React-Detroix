import smartStyles from '../SmartSec/SmartSec.module.css'
import puzzle from '../../assets/puzzle2.png'
import plantHands from '../../assets/plant hand2.png'
import maze from '../../assets/maze2.png'

function Smart() {

    return (
        <section>
            <div className= "d-flex flex-row me-0 justify-content-center">
                <div className="col-sm-4 text-sm-start border-top border-2 w-25">
                    <h2 className="fs-1 ms-4 mb-3 mt-3">SMART</h2>
                    <img src= {puzzle} className="infoImg ms-4 mb-3" alt="" />
                    <p className="infoText ms-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rem voluptatibus, veniam nobis quisquam cum adipisci exercitationem delectus molestias ipsam tempora reiciendis nesciunt? Quis at doloremque commodi rerum totam aut.</p>
                    <button type="submit" className={`${smartStyles.button} p-3 ms-4 mb-5`}>MORE</button>
                </div>

                <div className="col-sm-4 text-sm-start border-top border-start border-end border-2 w-25">
                    <h2 className="fs-1 ms-4 mb-3 mt-3">STRONG</h2>
                    <img src= {plantHands} className="infoImg ms-3 mb-3" alt="" />
                    <p className="infoText ms-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus tempore, temporibus voluptate at rerum sequi non inventore quas possimus est ea voluptas, veritatis reprehenderit laborum quasi. Consectetur, reiciendis dicta?</p>
                    <button type="submit" className=" p-3 ms-3 mb-5">MORE</button>
                </div>

                <div className="col-sm-4 text-sm-start border-top border-2 w-25">
                    <h2 className="fs-1 ms-4 mb-3 mt-3">STABLE</h2>
                    <img src= {maze} className="infoImg ms-2 mb-3" alt="" />
                    <p className="infoText ms-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatum rerum voluptatem quos totam molestiae error inventore quaerat corrupti vel cumque sunt ex delectus minus dignissimos culpa, autem eos facere.</p>
                    <button type="submit" className="p-3 ms-2 mb-5">MORE</button>
                </div>            
            </div>
        </section>
    )
}

export default Smart