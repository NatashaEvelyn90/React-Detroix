import styleSheet from '../../src/style.module.css'

function Circles() {
    return(
        <div className={styleSheet.mainCircles}>
               <div className={styleSheet.circles}></div>
               <div className={styleSheet.circles}></div>
               <div className={styleSheet.circles}></div> 
        </div>
    )
}

export default Circles