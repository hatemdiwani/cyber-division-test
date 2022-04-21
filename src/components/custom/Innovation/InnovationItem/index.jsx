import { Col } from "antd"
import './index.scss'
export default ({ item }) => {
    return (
        <>

            <Col xs={24} sm={24} md={8} >
            
                  
                    <div className="innovation_item">
                        <div className="innovation_number">
                         <span>{item.id}</span>   
                        </div>
                        <div className="innovation_content">
                            <span> {item.title} </span>
                            <p> {item.description} </p>
                        </div>
                    </div>

            

            </Col>
        </>
    )
}