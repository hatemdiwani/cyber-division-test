import Container from '../../ui/Container'
import './index.scss'
export default () => {
    return (
        <>
            <div className="header">
                <Container>
                    <div className="header_wrapper">
                        <div className="brand" >
                            <span>Awesome</span>
                            <span style={{ fontWeight: 'bold', marginLeft: '5px' }} >AGENCY</span>
                        </div>

                        <div className="burger_meu">
                            <div></div>
                            <div ></div>
                        </div>

                    </div>

                </Container>
                <div className="header_border">

                </div>
            </div>
        </>
    )
}