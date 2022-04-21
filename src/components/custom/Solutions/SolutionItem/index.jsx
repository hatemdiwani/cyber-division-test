import { Col, Row } from 'antd'
import './index.scss'
import { useState } from 'react'
import Container from '../../../ui/Container'
export default ({ solution }) => {

    return (
        <>
            <Container>
                <div className="solution_item_boder" ></div>

            </Container>
            <div className={`solution_item `}>
                <Row gutter={[10,10]} >
                    <Col xs={24} sm={24} md={8} >
                        <div className="solution_title">
                            <span  >   {solution.title} </span>
                            <i class="las la-arrow-up"></i>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} >
                        <span className="solution_description" >   {solution.description} </span>
                    </Col>
                </Row>

            </div>
        </>
    )
}