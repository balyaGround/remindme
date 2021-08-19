import React from 'react'
import { useState } from "react"
import { Modal, Col, Form, Button, FormControl, InputGroup, SplitButton, Dropdown} from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SettingGoals.scss'

function SettingGoalsCard() {
    const [modalShow, setModalShow] = React.useState(false);


function SettingGoalsCard(props) {
const [bColor, setbColor] = useState();


return (
<>



    <Modal className='GoalSetting shadow' {...props} size="lg"
        aria-labelledby="contained-modal-title-vcenter" centered>
        <div className='SetGoalsContainer shadow text-dark'>
            <Form>
                <h1 style={{fontSize:'1.8rem',fontWeight:'600'}} className='mb-4'>My Goal</h1>

                <Form.Group className="mb-4" controlId="GoalText">
                    <Form.Control className="Goals__Title" type="text" placeholder="What is Your Goal?" />
                </Form.Group>
                <div>
                    <p style={{fontSize:'1.3rem', fontWeight:'600'}}>Built or Quit This Goal?</p>
                </div>

                <div className='BuiltorQuitButton mt-4 mb-4'>
                    <Col className='d-flex flex-row justify-content-between'>
                    <Button className='BuildButton' variant="secondary"
                        style={{borderRadius:'40px',width:"45%", fontWeight:'700' }}>Build</Button>
                    <Button className='BuildButton' variant="secondary"
                        style={{borderRadius:'40px',width:"45%", fontWeight:'700',  }}>Quit</Button>
                    </Col>
                </div>
                <div className='d-flex flex-row justify-content-between'>

                    <p style={{fontSize:'1.3rem', fontWeight:'600'}}>Choose Time</p>
                    <p style={{fontSize:'1.3rem', fontWeight:'600'}}>Set Value</p>

                </div>
                <div className='d-flex flex-row justify-content-between'>

                    <Col className='kolomCalendar' style={{maxWidth:'45%', }}>
                    <SplitButton disabled align="end" className='ChooseValue mb-3'
                        style={{float:'left', paddingLeft:'0.5rem', borderRadius:'10px' , border:'1px solid #B6C6E5'}}
                        title="dd/mm/yy" id="ChooseValue"></SplitButton>
                    <div className='mt-5' style={{paddingLeft:'0.2rem'}}>
                        <p>Agustus, 2021</p>
                    </div>
                    <div className="Goals__calendar " style={{float:'left'}}>
                        <Calendar />
                    </div>
                    </Col>
                    <Col className='kolomValue  ' style={{maxWidth:'30%', }}>
                    <Form.Select className="PilihSatuan me-sm-2" id="PilihSatuan" style={{ borderRadius:'10px' }}>
                        <option id="PilihItem" value="0">Select</option>
                        <option id="PilihItem" value="1">ml (Mili Liter)</option>
                        <option id="PilihItem" value="2">km (Kilo Meter)</option>
                        <option id="PilihItem" value="3">m (Meter)</option>
                        <option id="PilihItem" value="4">Hours</option>
                        <option id="PilihItem" value="5">Minute</option>
                        <option id="PilihItem" value="6">Second</option>
                        <option id="PilihItem" value="7">Times</option>
                    </Form.Select>

                    {/* <div className="mt-2">
                        <SplitButton align="end" className='ChooseValue' title="Select" id="ChooseValue">
                            <Dropdown.Item eventKey="1">ml (Mili Liter)</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">km (Kilo Meter)</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">m (Meter)</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Hours</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5">Minute</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="6">Seconds</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="7">Times</Dropdown.Item>
                        </SplitButton>
                    </div> */}
                    </Col>

                </div>
                <div className="mt-3">
                    <p style={{fontSize:'1.3rem', fontWeight:'600'}}>Choose Progress bar Color</p>
                </div>
                <div className='ColorPicker'>
                    <button style={{backgroundColor:'#FFBCC2'}} onClick={()=> setbColor('#FFBCC2')}></button>
                    <button style={{backgroundColor:'#FCF3A1'}} onClick={()=> setbColor('#FCF3A1')}></button>
                    <button style={{backgroundColor:'#B1A8FF'}} onClick={()=> setbColor('#B1A8FF')}></button>
                    <button style={{backgroundColor:'#FF8888'}} onClick={()=> setbColor('#FF8888')}></button>
                    <button style={{backgroundColor:'#CCF0D7'}} onClick={()=> setbColor('#CCF0D7')}></button>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button type="submit" className='mt-3'
                        style={{width:'90%', fontWeight:'700',height:'3rem', borderRadius:'35px'}}
                        variant='warning'>Save</Button>
                </div>
            </Form>

        </div>
    </Modal>
    </>
    )
    }
    return (
        <div>
            
            <Button onClick={()=> setModalShow(true)}>SettingGoalsCard (Tombol Sementara)</Button>
            <SettingGoalsCard show={modalShow} onHide={()=> setModalShow(false)} />

        </div>
    )

}

export default SettingGoalsCard