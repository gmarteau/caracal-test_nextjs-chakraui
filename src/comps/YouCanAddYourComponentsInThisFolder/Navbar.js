import { Flex, Menu, MenuButton, MenuList, MenuItem, IconButton, Button, MenuDivider, Link } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';

import Col from "_comps/Layout/Col";

const Navbar = () => {
    return (
        <Col colStart={[14, null, 6]} colEnd={[26, null, 25]}>
            {/* Mobile */}
            <Flex as='nav' display={['flex', null, 'none']} justifyContent='flex-end'>
                <Menu>
                    <MenuButton as={IconButton} icon={<HamburgerIcon />} bg='primary.50' size='lg' color='gray.900' />
                    <MenuList zIndex='10'>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Products</MenuItem>
                        <MenuItem>Resources</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuDivider />
                        <MenuItem>Login</MenuItem>
                        <MenuItem>Signup</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

            {/* Desktop */}
            <Flex as='nav' display={['none', null, 'flex']} alignItems='center' justifyContent='space-between'>
                <Flex alignItems='center' justifyContent='flex-start'>
                    <NextLink href='#' passHref>
                        <Link fontSize='md' color='gray.500' mx='7'>Home</Link>
                    </NextLink>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant='light' size='lg' p='0' mr='7'>
                            Products
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <NextLink href='#' passHref>
                                    <Link>Product A</Link>
                                </NextLink>
                            </MenuItem>
                            <MenuItem>
                                <NextLink href='#' passHref>
                                    <Link>Product B</Link>
                                </NextLink>
                            </MenuItem>
                            <MenuItem>
                                <NextLink href='#' passHref>
                                    <Link>Product C</Link>
                                </NextLink>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant='light' size='lg' p='0' mr='7'>
                            Resources
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <NextLink href='#' passHref>
                                    <Link>Resource A</Link>
                                </NextLink>
                            </MenuItem>
                            <MenuItem>
                                <NextLink href='#' passHref>
                                    <Link>Resource B</Link>
                                </NextLink>
                            </MenuItem>
                            <MenuItem>
                                <NextLink href='#' passHref>
                                    <Link>Resource C</Link>
                                </NextLink>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <NextLink href='#' passHref>
                        <Link fontSize='md' color='gray.500' mr='7'>Pricing</Link>
                    </NextLink>
                </Flex>

                <Flex w='100%' justifyContent='flex-end'>
                    <NextLink href='#' passHref>
                        <Button as={Link} variant='light' size='lg'>
                            Log in
                        </Button>
                    </NextLink>
                    <NextLink href='#' passHref>
                        <Button as={Link} variant='solid' size='lg' ml='5'>
                            Sign up
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
        </Col>
    )
};

export default Navbar;
