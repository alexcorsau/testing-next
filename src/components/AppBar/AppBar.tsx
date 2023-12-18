import React, { useState } from 'react';
import { AppBarScene } from './AppBarScene';

interface AppBarProps {
  title: string;
}

export const AppBar = ({ title }: AppBarProps) => {
  const [mobileMenuState, setMobileMenuState] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuState(!mobileMenuState);
  };

  return (
    <AppBarScene
      title={title}
      isMobileMenuOpen={mobileMenuState}
      onToggleMobileMenu={toggleMobileMenu}
    />
  );
};
