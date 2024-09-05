import About from '@/components/About' ;
import Hero from '@/components/Hero';

import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from "lucide-react";

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Acoplamiento en Desarrollo'
    },
    {
        icon: <PhoneCall size={20}/>,
        text: 'Reduce la interdependencia entre módulos'
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'Mejora la mantenibilidad y escalabilidad'
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Evitando dependencias innecesarias'
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Contribuye a la flexibilidad del sistema'
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Favorece la separación de responsabilidades'
    }
]

const qualificationData = [
    {
        title: 'Tipos de Acoplamiento',
        data: [
            {
                university: 'Acoplamiento de Contenido',
                qualification: 'Un módulo modifica o depende del contenido de otro. Es el tipo de acoplamiento más alto y menos deseable.',
                years: 'Nivel: Alto'
            },
            {
                university: 'Acoplamiento de Control',
                qualification: 'Un módulo controla el flujo de otro mediante el paso de parámetros de control. Es menos deseable porque genera dependencia en el control de ejecución.',
                years: 'Nivel: Medio'
            },
            {
                university: 'Acoplamiento de Datos',
                qualification: 'Los módulos comparten únicamente los datos necesarios, reduciendo la interdependencia. Es uno de los acoplamientos más bajos y deseables.',
                years: 'Nivel: Bajo'
            }
        ]
    },
    {
        title: 'Beneficios del Bajo Acoplamiento',
        data: [
            {
                university: 'Facilidad de Mantenimiento',
                qualification: 'Sistemas con bajo acoplamiento son más fáciles de mantener y modificar, ya que los cambios en un módulo afectan menos a los demás.',
                years: '2024'
            },
            {
                university: 'Reutilización de Componentes',
                qualification: 'El bajo acoplamiento permite que los módulos sean reutilizables en otros sistemas sin necesidad de muchas modificaciones.',
                years: '2024'
            },
            {
                university: 'Escalabilidad',
                qualification: 'Un sistema con bajo acoplamiento es más fácil de escalar, ya que los módulos independientes pueden ser mejorados o reemplazados sin afectar todo el sistema.',
                years: '2024'
            }
        ]
    }
]

const skillData = [
    {
        title: 'Factores que Afectan el Acoplamiento',
        data: [
            {
                name: 'Interfaz Compleja',
                description: 'Cuantas más funciones y datos sean compartidos entre módulos, mayor será el acoplamiento.'
            },
            {
                name: 'Compartición de Información',
                description: 'Compartir datos globales o detalles internos entre módulos aumenta el acoplamiento.'
            },
            {
                name: 'Dependencia en la Implementación',
                description: 'Cuando un módulo depende de los detalles de implementación de otro, se genera un acoplamiento innecesario.'
            }
        ]
    },
    {
        title: 'Cómo Reducir el Acoplamiento',
        data: [
            {
                name: 'Utilizar Interfaces',
                description: 'Definir interfaces claras que oculten los detalles de implementación reduce la dependencia entre módulos.'
            },
            {
                name: 'Desacoplar Funcionalidades',
                description: 'Dividir el código en módulos con responsabilidades bien definidas minimiza la interdependencia.'
            },
            {
                name: 'Uso de Inyección de Dependencias',
                description: 'Aplicar el principio de inversión de dependencias reduce el acoplamiento entre clases.'
            }
        ]
    }
]


const skillData = []
const About = () =>{
    return <div>
        About
    </div>
};

export default About;
