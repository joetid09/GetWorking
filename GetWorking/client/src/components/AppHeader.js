import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";

const AppHeader = () => {
    const { getCurrentUser, logout, isAdmin } = useContext(UserProfileContext);
    const user = getCurrentUser();
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const logoutAndReturn = () => {
        return logout().then(() => {
            toast.dark("You are now logged out");
            history.push("/login");
        });
    };

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                {/* <NavbarBrand tag={Link} to="/">
          <img
            id="header-logo"
            src="/quill.png"
            width="30"
            height="30"
            className="mr-1"
            alt="Quill Logo"
          />
          Tabloid
        </NavbarBrand> */}
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {user ? (
                            <>
                                <NavItem>
                                    <NavLink to="/" tag={Link}>
                                        Explore
                  </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/create/post" tag={Link}>
                                        New Post
                  </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/mypost" tag={Link}>
                                        My Post
                  </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/myprofile" tag={Link}>
                                        My Profile
                  </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/subscription" tag={Link}>
                                        Subscription
                  </NavLink>
                                </NavItem>
                                {isAdmin() && (
                                    <>
                                        <NavItem>
                                            <NavLink to="/categories" tag={Link}>
                                                Categories
                      </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="/tags" tag={Link}>
                                                Tags
                      </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="/approval" tag={Link}>
                                                Post Approval
                      </NavLink>
                                        </NavItem>
                                    </>
                                )}
                                {isAdmin() && (
                                    <NavItem>
                                        <NavLink to="/profiles" tag={Link}>
                                            Profiles
                    </NavLink>
                                    </NavItem>
                                )}
                                <NavItem>
                                    <NavLink tag={Link} to="/" onClick={logoutAndReturn}>
                                        Logout
                  </NavLink>
                                </NavItem>
                            </>
                        ) : (
                                <>
                                    <NavItem>
                                        <NavLink to="/login" tag={Link}>
                                            Login
                  </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/register" tag={Link}>
                                            Register
                  </NavLink>
                                    </NavItem>
                                </>
                            )}
                    </Nav>
                    {user ? (
                        <NavbarText className="d-sm-none d-md-block">
                            Welcome {user.displayName}
                        </NavbarText>
                    ) : null}
                </Collapse>
            </Navbar>
        </div>
    );
};

export default AppHeader;
