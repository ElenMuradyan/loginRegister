import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Form, Button, Input, Row, Col } from 'antd';
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../core/utilis/constants";
import './style.css'
import regsterImage from '../../Imgs/register.png'; 

const Register= () => {
    const [ form ] = Form.useForm();
    const [ loading, setLoading ] = useState( false );

    const handleRegister = async values => {
        setLoading(true);
        try{
            const { email, password } = values;
            await createUserWithEmailAndPassword( auth, email, password );
            form.resetFields();
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        };
    };

    return (
        <div id='register'>
        <img src={ regsterImage } alt='Register'></img>
        <Form onFinish={ handleRegister } layout='vertical' form={ form }>
            <p>REGISTER</p>
            <Form.Item
            label='First name'
            name='firstName'
            rules={[{
                required:true,
                message:'Please input your first name'
            }]}
            >
            <Input type='text' placeholder="First name"></Input>
            </Form.Item>
            <Form.Item
            label='Last name'
            name='lastName'
            rules={[{
                required:true,
                message:'Please input your last name'
            }]}
            >
            <Input type='text' placeholder="Last name"></Input>
            </Form.Item>
            <Form.Item
            label='Email'
            name='email'
            rules={[{
                required:true,
                message:'Please input your email'
            }]}
            >
            <Input type='email' placeholder="Email"></Input>
            </Form.Item>
            <Form.Item
            label='Password'
            name='password'
            rules={[{
                required:true,
                message:'Please input your password'
            }]}
            >
            <Input.Password placeholder="Password"/>
            </Form.Item>
            <Button className='button' htmlType="submit" loading={ loading }>Sign up</Button>
            <br/>
            <span>Already have an account?</span><Link to={ROUTE_CONSTANTS.LOGIN}>Sign up</Link>
        </Form>
        </div>
    )
};

export default Register;