import React,{ useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TopNavbar from './TopNavbar';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {

  let {id} = useParams()
  let navigate = useNavigate()

  const [name, setName] = useState("")
  const [user_name, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone_number, setPhone] = useState("")
  const [website, setWebsite] = useState("")

  const handleEdit = async() => {
    try {
      let data = {name,user_name,email,phone_number,website,status:false};
      let res = await axios.put(`${API_URL}/${id}`,data)
      if(res.status === 200){                   
        navigate('/')
        toast.success("Data Updated Succesfully")
      }
    }catch (error) {
      toast.danger("Update failed")
    }
  }

  const getUserdataById = async() => {
    try {
      let res = await axios.put(`${API_URL}/${id}`)
      if(res.status===200){
        setName(res.data.name)
        setUsername(res.data.user_name)
        setEmail(res.data.email)
        setPhone(res.data.phone_number)
        setWebsite(res.data.website)
      }      
    }catch (error) {
      toast.error("Internal error")
    }
  }

  useEffect(()=>{
    getUserdataById();
  },[])

  return <>
      <div className='container-fluid'>
          <TopNavbar/>
          <div className="fromWrapper">
              <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value = {name} placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
                  </Form.Group>
                  <Row className="mb-3">
                      <Form.Group as={Col}>
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" value = {user_name} placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                        </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' value = {email} placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                      </Form.Group>
                  </Row>
                  <Row className="mb-3">
                      <Form.Group as={Col}>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="text" value = {phone_number} placeholder="Enter Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Label>Website</Form.Label>
                          <Form.Control type="text" value = {website} placeholder="Enter Website"  onChange={(e)=>{setWebsite(e.target.value)}}/>
                      </Form.Group>
                  </Row>
                  
                  <Button variant="success" onClick={()=>handleEdit()}>Update</Button>
              </Form>    
          </div>            
      </div>
  </>
    
}

export default Edit