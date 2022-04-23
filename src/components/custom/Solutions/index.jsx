import { Col, Row } from 'antd'
import Container from '../../ui/Container'
import './index.scss'
import SolutionItem from './SolutionItem'
export default () => {



    const solutions = [
        { title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. ' },
        { title: 'Project 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. ' },
        { title: 'Project 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. ' },
        { title: 'Project 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. ' },
        { title: 'Project 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. ' },
    ]

    return (
        <>
            <div className="solutions">
                <Row>
                    <Col xs={24} sm={24} md={14} >
                        <span className='soultions_title' >
                            Simple Solutions for complex connections. We are pushing limits
                        </span>
                    </Col>

                </Row>


            </div>

            <div className="solutions_items_wrapper">
                <div
                   
                    className="items"
                >

                    <Row style={{ marginTop: '20px' }} >
                        {
                            solutions.map((solution , i ) => {
                                return (
                                    <Col span={24} >
                                        <SolutionItem key={i} solution={solution} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>

               



            </div>


            <Container>
                <div className="solution_item_boder" ></div>

            </Container>

        </>
    )
}