import bikeOne from '../../../public/design/bikeOne2.jpg'
import bikeTwo from '../../../public/design/bikeTwo2.jpg'
import bikeThree from '../../../public/design/bikeThree2.jpg'
import './Threeimg.css'


function Threeimg() {

    return (
        <div className="threeimg">
            <div>
                <p>text</p>
                <img src={bikeOne}></img>
            </div>
            <div>
                <p>text</p>
                <img src={bikeTwo}></img>
            </div>
            <div>
                <p>text</p>
                <img src={bikeThree}></img>
            </div>
        </div>
    )
}

export default Threeimg