import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";



export const FACEBOOK = 'facebook';
export const SNAPCHAT = 'SnapChat';
export const WHATSAPP = 'whatsapp';
export const LINKEDIN = "LinkedIn";
export const TIKTOK ='TikTok'
export const INSTAGRAM   ="instagram"

export const  SOCIAL_MEDIA = [FACEBOOK , SNAPCHAT , WHATSAPP , LINKEDIN , TIKTOK ,INSTAGRAM]



export const DATASOCIALMEDIA = [ 
    {
        key:FACEBOOK,
        icon: <FaFacebookF />
    },
    {
        key:INSTAGRAM,
        icon: <FaInstagram />
    },
    {
        key:TIKTOK,
        icon: <FaTiktok />
    },
    {
        key:SNAPCHAT,
        icon: <FaSnapchatGhost />
    },
    {
        key:WHATSAPP,
        icon: <FaWhatsapp />
    },
    {
        key:LINKEDIN,
        icon: <FaLinkedinIn />
    }
]