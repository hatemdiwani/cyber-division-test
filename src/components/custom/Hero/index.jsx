import { Col, Row } from 'antd'
import Container from '../../ui/Container'
import './index.scss'
import victor from '../../../assets/img/Vector.png'
import hero from '../../../assets/img/hero.png'
import { useEffect, useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
export default () => {

    const [index, setIndex] = useState(0);
    const TEXTS = [
        "Innovate",
        "Connect",
        "Inspire"
    ];

    const ref = useRef()

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index >= 2 ? 0 : index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);

    }, []);


    useEffect(() => {
        console.log(ref);
    }, [ref])



    return (
        <div className="hero">

            <Container>
                <Row>
                    <Col xs={24} sm={24} md={12} >
                        <div className="hero_big_title">

                            <div className='closen'>




                                <div className=''  >
                                    Closen the technology of the future to help <span ref={ref} >you</span>
                                    <span
                                        className='innovate_iamge'
                                        style={{
                                            backgroundImage: `url(${victor})`,
                                            backgroundRepeat: 'no-repeat',
                                            position: "absolute",
                                            width: '130px',
                                            height: '100%',
                                            padding: "0px 10px",
                                            marginTop: "35px",
                                            objectFit: 'cover'
                                        }}
                                    >
                                        <span className={TEXTS[index]} style={{ position: 'absolute', marginTop: '-35px' }} >
                                            <Fade up key={index} >
                                                {TEXTS[index]}
                                            </Fade>

                                        </span>
                                    </span>

                                </div>




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
            </Container >
        </div >
    )
}