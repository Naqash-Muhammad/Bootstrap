import react from 'react';
import { Container, Col, Row, Stack, Form } from 'react-bootstrap';



const Grid = () =>{
    

    return(
        <>
            <Container fluid>
              <Row>
                <Col className="bg-info" xs={4} md={2}>Services</Col>
                <Col className="bg-warning text-center" md={3} xs={6}>TaraNaanShop</Col>
                <Col className="bg-info">Home</Col>
                <Col className="bg-info">Content</Col>
                <Col className="bg-info">Complaints</Col>
                <Col className="bg-info">Offers</Col>
                <Col className="bg-info">Location</Col>
              </Row>
            </Container>

           {/* create form */}
           <Stack gap={5} className='pt-3 m-4' direction='horizontal'>
             <Form.Control placeholder="add your oppnin" className="me-auto" />
             <button type='submit' className="bg-danger">submit</button>
             <div className='vr'></div>
             <button type='submit' variant="outline-danger">click</button>
           </Stack>
     
        </>
    )
}

export default Grid;