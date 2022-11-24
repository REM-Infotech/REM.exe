import React from 'react'
import styled from 'styled-components';
import logImage from '../assets/logo_white.png';

type Props = {}

const Logo = (props: Props) => {
  return (
    <div>
        <Image
            src={logImage}
        />
    </div>
  )
}

export default Logo;

const Image = styled.img`
    width: 7rem;
`