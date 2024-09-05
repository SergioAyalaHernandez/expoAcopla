import Link from "next/link";
import {Button} from "./ui/button";
import {Download, Send} from "lucide-react";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiT0d0Fill,
    RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
    return (
        <section className='p-1.5 py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className="container mx-auto">
                <div className='flex justify-between gap-x-8'>
                    <div
                        className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div
                            className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Acomplamiento
                        </div>
                        <h1 className='h1'>Hola, hoy hablaremos del acomplamiento</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                            se ha definido el acoplamiento como la medida de la interdependencia entre dos módulos de
                            software. Cuanto mayor sea el acoplamiento, mayor será la interdependencia, lo que puede
                            dificultar el desarrollo, prueba y mantenimiento de los módulos</p>
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href='/contact'>
                                <Button className='gap-x-2'>Contactanos
                                <Send size={18}/></Button>
                            </Link>
                            <a href="/hero/presentation.pdf" download>
                                <Button variant='secondary' className='gap-x-2'>
                                    Download PDF
                                    <Download size={18}/>
                                </Button>
                            </a>
                        </div>
                        <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px]
                        hover:text-primary transition all' />
                    </div>
                    <div className='hidden xl:flex relative gap-x-16'>
                        <Badge containerStyles='absolute top-[-12%] -left-[7rem]'
                            icon={<RiBriefcase4Fill/>}
                            endCountNum={60}
                            badgeText='%acomplado'
                        />
                        <Badge containerStyles='absolute top-[70%] -left-[9rem]'
                               icon={<RiBriefcase4Fill/>}
                               endCountNum={90}
                               badgeText='%acomplado'
                        />
                        <Badge containerStyles='absolute top-[-10%] -left-[-20rem]'
                               icon={<RiBriefcase4Fill/>}
                               endCountNum={85}
                               badgeText='%acomplado'
                        />
                        <Badge containerStyles='absolute top-[50%] -left-[-26rem]'
                               icon={<RiBriefcase4Fill/>}
                               endCountNum={75}
                               badgeText='%acomplado'
                        />

                        <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px]
                        bg-no-repeat absolute -top-1 -right-2'></div>
                        <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repear relative bg-bottom"
                        imgSrc='/hero/developer.png'/>
                    </div>
                    <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                        <RiArrowDownSLine className='text-3xl text-primary'/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;