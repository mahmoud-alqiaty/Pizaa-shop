import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer, FooterLogo, FooterSocials, FooterSocialsLink} from './Footerstyles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo>
                pizza
            </FooterLogo>

            <FooterSocials>
                <FooterSocialsLink>
                    <FaFacebookF />
                </FooterSocialsLink>

                <FooterSocialsLink>
                    <FaInstagram />
                </FooterSocialsLink>

                <FooterSocialsLink>
                    <FaTwitter />
                </FooterSocialsLink>

                <FooterSocialsLink>
                    <FaYoutube />
                </FooterSocialsLink>
            </FooterSocials>

        </FooterContainer>
    )
}

export default Footer
