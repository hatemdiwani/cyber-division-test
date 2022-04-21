import { Col, Row } from 'antd'
import Container from '../../ui/Container'
import './index.scss'
import victor from '../../../assets/img/Vector.png'
import hero from '../../../assets/img/hero.png'
export default () => {
    return (
        <div className="hero">
            <Container>
                <Row>
                    <Col xs={24} sm={24} md={12} >
                        <div className="hero_big_title">

                            <div className='closen'>
                                <span>

                                    <div>
                                        <span>   Closen the technology of the future to help you  <span className="innovate" style={{ position: 'relative' }} > innovate <img style={{ position: 'absolute', right: 0 }} src={victor} alt="" />  </span> </span>

                                    </div>
                                </span>


                            </div>



                        </div>


                        <div className="hero_description">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam a sollicitudin convallis purus. Sed sed quam risus laoreet viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet neque. Sed est malesuada lobortis aliquam dolor eget donec

                            </span>

                            <button>
                                Get started
                            </button>
                        </div>

                        <div className="clients">
                            <span className='some' >Some of our clients</span>
                            <div style={{ display: 'flex', marginTop: '15px', alignItems: "center" }} >
                                <i class="lab la-apple"></i>
                                <span className='google' >Google</span>
                                <span className='microsoft' >Microsoft</span>
                            </div>
                        </div>

                        <div className="hero_bottom_border">

                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} >

                            <img className='hero_image' src={hero} alt="" />
                        </div>


                    </Col>

                    <div className="clients1">
                        <span className='some' >Some of our clients</span>
                        <div style={{ display: 'flex', marginTop: '15px', alignItems: "center" }} >
                            <i class="lab la-apple"></i>
                            <span className='google' >Google</span>
                            <span className='microsoft' >Microsoft</span>
                        </div>
                    </div>

                    <div className="hero_bottom_border1">

                    </div>
                </Row>
            </Container>
        </div >
    )
}