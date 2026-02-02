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
            text: 'Servicios', // antes Blog/Insights
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
        text: '',
        image: {
            src: hero,
            alt: 'Consultoría empresarial, estrategia y tecnología'
        },
        actions: [
            {
                text: 'Solicitar diagnóstico',
                href: '/tags'
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
