import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Image,
    Box,
    Stack,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';

import { ThemeContext } from '../Contexts/ThemeContext';
import { AuthContext } from '../Contexts/AuthContext';
import styles from '../Styles/LoginSignup.module.css';

const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [show, setShow] = React.useState(false);
    const { theme } = React.useContext(ThemeContext);
    const { loginUser } = React.useContext(AuthContext);
    const [formData, setFormData] = React.useState({
        name: '',
        username: '',
        email: '',
        mobile: '',
        password: '',
        order: [],
    });
    const [alertShow, setAlertShow] = React.useState(null);
    const [allDetails, setAllDetails] = React.useState('');

    const handleClick = () => setShow(!show);

    const HandleAlert = () => {
        setAlertShow('');
        setAllDetails('');
    };

    const InSignUp = async () => {
        try {
            let response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            let res = await response.json();
            if (res.message === 'User registered successfully!') {
                console.log('Signup Successful');
                loginUser(formData);
                setFormData({
                    name: '',
                    username: '',
                    email: '',
                    mobile: '',
                    password: '',
                    order: [],
                });
            } else if (res.message === 'User already exists!') {
                setAlertShow('True');
            }
        } catch (err) {
            console.error('Error during sign-up:', err);
        }
    };

    const HandleSignup = (e) => {
        e.preventDefault();
        if (
            formData.name === '' ||
            formData.username === '' ||
            formData.email === '' ||
            formData.mobile === '' ||
            formData.password === ''
        ) {
            setAllDetails('False');
        } else {
            setAllDetails('True');
            InSignUp();
        }
    };

    const HandleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Button ref={btnRef} style={{ width: '100%' }} onClick={onOpen}>
                Signup
            </Button>
            <Drawer
                bgGradient="radial(gray.300, yellow.400, pink.200)"
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
                finalFocusRef={btnRef}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent>
                    {allDetails === 'False' ? (
                        <Alert status="warning" style={{ position: '' }} variant="left-accent">
                            <AlertIcon />
                            Error: Please fill all the credentials!
                        </Alert>
                    ) : alertShow === 'True' ? (
                        <Alert status="error" style={{ position: '' }} variant="left-accent">
                            <AlertIcon />
                            Error: User already exists!
                        </Alert>
                    ) : null}

                    <DrawerHeader>
                        <Box boxSize="120px">
                            <DrawerCloseButton />
                            <Image
                                src="https://i.ibb.co/xH2f3Lb/Box-Delivery-Service.png"
                                style={{ marginTop: '-25px' }}
                                alt="Redrblack"
                            />
                        </Box>
                        Start with QuickBox!
                    </DrawerHeader>

                    <DrawerBody>
                        <form onSubmit={HandleSignup}>
                            <Stack spacing={3}>
                                <Input
                                    type="text"
                                    value={formData.name}
                                    name="name"
                                    onChange={HandleFormData}
                                    placeholder="Enter your full name"
                                />
                                <Input
                                    type="text"
                                    value={formData.username}
                                    name="username"
                                    onChange={HandleFormData}
                                    placeholder="Create a unique username"
                                />
                                <Input
                                    type="email"
                                    value={formData.email}
                                    name="email"
                                    onChange={HandleFormData}
                                    placeholder="Enter your E-mail"
                                />
                                <Input
                                    type="number"
                                    value={formData.mobile}
                                    name="mobile"
                                    onChange={HandleFormData}
                                    placeholder="Enter your mobile number"
                                />

                                {/* Password input ------------------------- */}
                                <InputGroup size="md">
                                    <Input
                                        pr="4.5rem"
                                        value={formData.password}
                                        name="password"
                                        onChange={HandleFormData}
                                        type={show ? 'text' : 'password'}
                                        placeholder="Enter password"
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {show ? (
                                                <FontAwesomeIcon
                                                    style={{ fontSize: '20px' }}
                                                    icon={faEyeSlash}
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    style={{ fontSize: '20px' }}
                                                    icon={faEye}
                                                />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {/* ------------------------------- */}
                                <Button
                                    bg="red"
                                    color="white"
                                    style={{ marginTop: '30px', cursor: 'pointer' }}
                                    onClick={HandleSignup}
                                >
                                    Create an account
                                </Button>
                            </Stack>
                        </form>
                    </DrawerBody>
                    <DrawerFooter>
                        {alertShow === 'True' || allDetails === 'False' ? (
                            <Button
                                colorScheme="red"
                                onClick={HandleAlert}
                                variant="ghost"
                            >
                                Remove Alert
                            </Button>
                        ) : null}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default Signup;
