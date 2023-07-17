import React, { useEffect } from 'react';
import Logo from './Logo';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';

import ThemeSlider from '../ui/ThemeSlider';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { usePopup } from '../../context/PopupContext';
import AccountButton from './AccountButton';

export default function Header() {
    const { toggleTheme, theme } = useTheme();
    const { loading, user } = useAuth();
    const { signOut } = useAuth();
    const { accountDropdown, setAccountDropdown } = usePopup();
    const navigate = useNavigate();

    return (
        <div className="absolute top-0 left-0 right-0 border-b-2 border-secondary/10 z-[10]">
            <Container className="flex flex-row py- justify-between py-2 items-center">
                <Logo />
                <div className="flex flex-row gap-4 items-center">
                    <AccountButton />
                    <ThemeSlider />
                </div>
            </Container>
        </div>
    );
}
