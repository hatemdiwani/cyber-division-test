import { Col, Row } from 'antd'
import './index.scss'
import { useState } from 'react'
import Container from '../../../ui/Container'

import image from '../../../../assets/img/soluionimage.png'
export default ({ solution }) => {

    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <Container>
                <div className="solution_item_boder" ></div>

            </Container>
            <div className={`solution_item `} onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <Row gutter={[10, 10]} >
                    <Col xs={24} sm={24} md={8} >
                        <div className="solution_title">
                            <span  >   {solution.title} </span>
                            <i class="las la-arrow-up"></i>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} >
                        <span className="solution_description" >   {solution.description} </span>
                    </Col>
                    {
                        isShown && <Col xs={24} sm={24} md={8}><img className="solution_image" src={image} alt="" /></Col>
                    }
                </Row>

            </div>
        </>
    )
}