import React from 'react'
import styled from 'styled-components'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Nav >
            <Logo src="/logo.png" />
            <NavMenu>
                <a>
                    <Link to='/'>HOME</Link>
                </a>

                <a>
                    <span>About US</span>
                </a>

                <a>
                    <span>Contact </span>
                </a>


            </NavMenu>

            <SideNav />

        </Nav>
    )
}

export default Header

// const SideNav = styled.div`
// a{  
//     display:flex;
//     align-items:left;
//     padding:0 12px;
//     cursor:pointer;

// }`



const Nav = styled.nav`
height:70px;
background:#ADD8E6;
display:flex;
align-items:center
padding:0 360px
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
}`

const Logo = styled.img`
width:80px;`

const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
}

span{
    font-size:13px;
    letter-spacing:1.2px
}`

const UserImg = styled.img`
width:50px;
height:50px;
border-radius:50%
`