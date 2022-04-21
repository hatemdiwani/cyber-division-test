import { Col } from 'antd'
import './index.scss'
export default ({ team }) => {
    return (
        <Col sm={team.layout.sm} xs={team.layout.xs} md={team.layout.md} >
            <div>

                <div className="team_item">
                    <div className={team.title} >
                        <img className={team.title} src={team.image} alt="" />
                    </div>
                    <span> {team.title}  </span>
                </div>
            </div>
        </Col>
    )
}