import { Col, Row } from "antd"
import './index.scss'
import innovation from '../../../assets/img/innovation.png'
import InnovationItem from "./InnovationItem"
export default () => {

    const items = [
        { id: "07", title: "Projects", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam a sollicitudin convallis purus. Sed sed quam risus laoreet viverra id ut amet feugiat.  nec id id sed ut nulla aliquet neque.' },
        { id: "23", title: "Clients", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam a sollicitudin convallis purus. Sed sed quam risus laoreet viverra id ut amet feugiat.  nec id id sed ut nulla aliquet neque. ' },
        { id: "04", title: "Tech & Creative teams", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam a sollicitudin convallis purus.  sed quam risus laoreet viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet neque.' }
    ]

    return (
        <>
            <div className="innovation">

                <Row  >
                    <Col xs={24} sm={24} md={4} >
                        <img className='innovation_image' src={innovation} alt="" />
                    </Col>
                    <Col xs={24} sm={24} md={20} >
                        <div className="innovation_items" >
                            <Row gutter={[40, 40]} >
                                <Col span={24} >
                                    <span className="innovation_title" >Empowered by Innovation, Commited by Intellect and Driven by Values</span>
                                </Col>
                                {
                                    items.map(item => {
                                        return (
                                            <InnovationItem item={item} />
                                        )
                                    })
                                }

                            </Row>

                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}