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
            text: 'Casos de Exito',
            href: '/projects'
        },
        {
            text: 'Soluciones',
            children: [
                {
                    text: 'Soluciones IA',
                    href: '/blog'
                },
                {
                    text: 'Soluciones Comerciales',
                    href: '/projects'
                }
            ]
        },
        {
            text: '¿Quiénes Somos?',
            href: '/quienes-somos'
        },
        {
            text: 'Contáctanos',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: '¿Quiénes Somos?',
            href: '/quienes-somos'
        },
        {
            text: 'Contáctanos',
            href: '/tags'
        },
        {
            text: 'Términos',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/company/innercirclemexico/'
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
        enabled: false,
        title: '',
        text: '',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
