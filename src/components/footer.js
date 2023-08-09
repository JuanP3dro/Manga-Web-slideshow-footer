import {BiLogoDiscord} from 'react-icons/bi'

function Footer() {
    return (
        <footer className="bg-[#222222] min-h-[190px] w-full absolute bottom-[-1200px] flex flex-col items-center justify-around">
            <a href='https://discord.com/invite/XK2XTvuuUk' className='flex items-center justify-center rounded-[4px] cursor-pointer w-[30px] h-[30px] border border-[#bdbdbd]'>
                <BiLogoDiscord className='text-[#bdbdbd] w-[15px] h-[15px]'/>
            </a>
            <p className='w-[700px] text-white'>All the comics on this website are only previews of the original comics, there may be many language errors, character names, and story lines. For the original version, please buy the comic if it's available in your city.</p>
            <p className='text-white font-semibold'>Copyright © 2023 nightscans™ | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;