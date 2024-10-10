import { Form, Input, Button } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ROUTE_CONSTANTS } from '../../core/utilis/constants';
import { auth } from '../../services/firebase'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
     const [ form ] = Form.useForm();
     const [ loading, setLoading ] = useState( false );

     const handleLogin = async values => {
                setLoading( true );
                try{
                const { email, password } = values;
                await signInWithEmailAndPassword( auth, email, password );
                form.resetFields();
                }catch( error ){
                console.log( error );
                }finally{
                        setLoading( false );
                };
      };

        return(
        <div>
        <Form layput='vertical' onFinish={ handleLogin } form={ form }>
                <Form.Item 
                label='Email'
                name='email'
                rules={[{
                        required:true,
                        message:'Enter your email'
                }]}
                >
                <Input type='email' placeholder='Email'></Input>
                </Form.Item>
                <Form.Item 
                label='Password'
                name='password'
                tooltip='Password must be min 6 max 16 characters .....'
                rules={[{
                        required:true,
                        message:'Enter your email'
                }]}
                >
                <Input.Password placeholder='Password'/>
                </Form.Item>
                <Button type='primary' htmlType='submit' loading={ loading }>Sign In</Button>

                <Link to={ROUTE_CONSTANTS.REGISTER}>Sign up</Link>

        </Form>
        </div>
        )
}
export default Login