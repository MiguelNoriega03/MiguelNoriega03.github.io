import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://innercircle.mx',
    avatar: {
        src: avatar,
        alt: 'Inner Circle'
    },
    title: 'Inner Circle Consulting',
    subtitle: 'Consultoría Empresarial',
    description: 'Inner Circle es una consultora para crecer sin improvisación. Nos involucramos a fondo y convertimos estrategia en ejecución.',
    image: {
        src: '/hero.jpg',
        alt: 'Inner Circle - Consultoría empresarial, estrategia y tecnología'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Casos de Exito', // antes Projects
            href: '/projects'
        },
        {
            text: 'Insights', // antes Blog
            href: '/blog'
        },
        {
            text: '¿Quiénes Somos?',
            href: '/quienes-somos'
        },
        {
            text: 'Contáctanos', // antes Resources/Tags
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: '',
        text: 'Inner Circle es una consultora para crecer sin improvisación. Nos involucramos a fondo y convertimos estrategia en ejecución. Combinamos ingeniería e IA aplicada con finanzas, rentabilidad y experiencia real en ventas. Nuestro estándar es simple: si tomamos un proyecto, nos hacemos responsables del resultado y no le fallamos a nuestros clientes.',
        image: {
            src: hero,
            alt: 'Consultoría empresarial, estrategia y tecnología'
        },
        actions: [
            {
                text: 'Solicitar diagnóstico',
                href: 'https://wa.me/525559446719?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico%20para%20mi%20empresa'
            },
            {
                text: 'Casos de Éxito',
                href: '/projects'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
