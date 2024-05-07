import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/about" style={({ isActive }) => isActive ? { fontWeight: 'bold' } : undefined}>About</NavLink>
            <NavLink to="/portfolio" style={({ isActive }) => isActive ? { fontWeight: 'bold' } : undefined}>Portfolio</NavLink>
            <NavLink to="/contact" style={({ isActive }) => isActive ? { fontWeight: 'bold' } : undefined}>Contact</NavLink>
            <NavLink to="/resume" style={({ isActive }) => isActive ? { fontWeight: 'bold' } : undefined}>Resume</NavLink>
        </nav>
    );
}

export default Navigation;
