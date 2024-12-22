// LogoBanner.jsx
import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  position: relative;
  height: 8vh;
  width: 100%;
  overflow: hidden;
  background: transparent;
`;

const LogoTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: scroll 30s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Logo = styled.img`
  height: 2.5rem;
  object-fit: contain;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 200px;
  pointer-events: none;

  &.left {
    left: 0;
    background: linear-gradient(90deg, white, transparent);
  }

  &.right {
    right: 0;
    background: linear-gradient(-90deg, white, transparent);
  }
`;

const logos = [
  "https://api.iconify.design/cryptocurrency:btc.svg?color=%23000000", // Bitcoin logo
  "https://api.iconify.design/mdi:atm.svg?color=%23000000", // ATM icon
  "https://api.iconify.design/material-symbols:payments.svg?color=%23000000", // Payments
  "https://api.iconify.design/mdi:bank.svg?color=%23000000", // Banking
  "https://api.iconify.design/mdi:security.svg?color=%23000000", // Security
  "https://api.iconify.design/mdi:cash-multiple.svg?color=%23000000", // Money/Investment
  "https://api.iconify.design/mdi:handshake.svg?color=%23000000", // Partnership
  "https://api.iconify.design/mdi:store.svg?color=%23000000", // Retail/Location
  "https://api.iconify.design/mdi:chart-line.svg?color=%23000000", // Growth/Trading
  "https://api.iconify.design/mdi:support.svg?color=%23000000", // Support
  "https://api.iconify.design/mdi:shield-check.svg?color=%23000000", // Compliance
  "https://api.iconify.design/mdi:account-group.svg?color=%23000000", // Community/Network
];
const LogoBanner = () => {
  return (
    <BannerContainer>
      <Gradient className="left" />
      <LogoTrack>
        {logos.concat(logos).map((logo, index) => (
          <Logo key={index} src={logo} alt={`Partner ${index}`} />
        ))}
      </LogoTrack>
      <Gradient className="right" />
    </BannerContainer>
  );
};

export default LogoBanner;
