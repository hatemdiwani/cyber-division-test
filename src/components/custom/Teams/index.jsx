import './index.scss'

import administration from '../../../assets/img/administration.png'
import all from '../../../assets/img/all.png'
import design from '../../../assets/img/design.png'
import developpment from '../../../assets/img/developpment.png'
import TeamItem from './TeamItem'
import { Row } from 'antd'
export default () => {


    const items = [
        {
            title: "Administration",
            image: administration,
            layout: {
                xs: 24,
                sm: 24,
                md: 4
            }
        },
        {
            title: "Design",
            image: design,
            layout: {
                xs: 24,
                sm: 24,
                md: 4
            }
        },
        {
            title: "Developpment",
            image: developpment,
            layout: {
                xs: 24,
                sm: 24,
                md: 12
            }
        },
        {
            title: "All",
            image: all,
            layout: {
                xs: 24,
                sm: 24,
                md: 4
            }
        },
    ]


    return (
        <>
            <div className="teams">
                <div className="teams_title" >
                    <span>Our teams are continuously developing innovative strategies, building new technologies, and conducting ongoing research.</span>
                </div>

                <Row style={{marginTop : '20px'}} >
                    {
                        items.map(item => {
                            return (
                                <TeamItem team={item} />
                            )
                        })
                    }
                </Row>

            </div>
        </>
    )
}