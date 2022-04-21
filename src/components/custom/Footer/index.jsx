import { Col, Row } from 'antd'
import Container from '../../ui/Container'
import './index.scss'

export default () => {
    return (
        <>
            <div className="footer">
                <div className="footer_top">
                    <span>You’ve got questions, we’ve got answers... Let’s Chat!</span>
                    <button>
                        Contact the team
                    </button>
                </div>

                <div className="footer_separator">

                </div>
                <div className="footer_bottom">

                    <Container>

                        <Row>
                            <Col xs={24} sm={24} md={6}  >
                                <div className="footer_brand" >
                                    <span>Awesome</span>
                                    <span style={{ fontWeight: 'bold', marginLeft: '5px' }} >AGENCY</span>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6}  >
                                <ul>
                                    <li className='list_item active'>Information</li>
                                    <li className='list_item'>About us</li>
                                    <li className='list_item'>Origins</li>
                                    <li className='list_item'>FAQs</li>
                                    <li className='list_item'>Contact</li>
                                    <li className='list_item'>Legal</li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={12} md={6}  >
                                <ul>
                                    <li className='list_item active'>Contact Us</li>
                                    <li className='list_item'>contact@awesomeagency.com</li>
                                    <li className='list_item'>+216 00 000 000</li>
                                    <li className='list_item'>The world, of Awesomeness</li>
                                </ul>
                            </Col>
                            <Col xs={24} sm={24} md={6}  >
                                <span className='list_item active' >Follow us On Social Media</span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}