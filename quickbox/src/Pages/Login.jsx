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
    AlertIcon
} from '@chakra-ui/react';
import { AuthContext } from '../Contexts/AuthContext';

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [show, setShow] = React.useState(false);
    const { loginUser } = React.useContext(AuthContext);
    const [alertShow, setAlertShow] = React.useState(null);

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const handleClick = () => setShow(!show);

    const HandleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const user = await response.json();
                loginUser(user);
                setAlertShow('True');
            } else {
                setAlertShow('False');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setAlertShow('False');
        }

        setFormData({
            email: '',
            password: ''
        });
    };

    const HandleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Button ref={btnRef} onClick={onOpen}>
                Login
            </Button>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
                finalFocusRef={btnRef}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent>
                    {alertShow === 'False' && (
                        <Alert status="error" variant="left-accent">
                            <AlertIcon />
                            Error: Password or email is incorrect
                        </Alert>
                    )}

                    <DrawerHeader>
                        <Box boxSize="120px">
                            <DrawerCloseButton />
                            <Image
                                src="https://i.ibb.co/xH2f3Lb/Box-Delivery-Service.png"
                                alt="Redrblack"
                                style={{ marginTop: '-25px' }}
                            />
                        </Box>
                        Welcome Back!
                    </DrawerHeader>

                    <DrawerBody>
                        <form onSubmit={HandleLogin}>
                            <Stack spacing={3}>
                                <Input
                                    type="email"
                                    value={formData.email}
                                    name="email"
                                    onChange={HandleFormData}
                                    placeholder="Enter your E-mail"
                                />
                                <InputGroup size="md">
                                    <Input
                                        pr="4.5rem"
                                        type={show ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={HandleFormData}
                                        placeholder="Enter your password"
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {show ? (
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEye} />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Button
                                    type="submit"
                                    bg="red"
                                    color="white"
                                    style={{ marginTop: '30px', cursor: 'pointer' }}
                                >
                                    Login
                                </Button>
                            </Stack>
                        </form>
                    </DrawerBody>

                    <DrawerFooter>
                        {alertShow === 'False' && (
                            <Button colorScheme="red" onClick={() => setAlertShow('')} variant="ghost">
                                Remove Alert
                            </Button>
                        )}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Login;
