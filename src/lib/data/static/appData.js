export const appData = [{
    id: 0,
    slug: 'start',
    head: {
        titel: 'Nwp-Studio',
        sub: 'Startseite',
        bg: 'https://nwp-cgn.de/studio/upload/kat11/server/php/files/building_blocks_01.png'
    },
    link: {
        path: '/',
        name: 'Start',
        icon: 'home'
    },
    files: [{
        file: 'https://nwp-cgn.de/img/poser/airhostess_128.png'
    }]
},
{
    id: 1,
    slug: 'editor',
    head: {
        titel: 'Nwp-Studio',
        sub: 'Schema-List',
        bg: 'https://nwp-cgn.de/studio/upload/kat11/server/php/files/building_blocks_02.png'
    },
    link: {
        path: '/editor',
        name: 'List',
        icon: 'database'
    },
    files: []
},
{
    id: 2,
    slug: 'editor.view',
    head: {
        titel: 'Nwp-Studio',
        sub: 'Json-Editor',
        bg: 'https://nwp-cgn.de/studio/upload/kat11/server/php/files/building_blocks_03.png'
    },
    link: {
        path: '/editor/view',
        name: 'Editor',
        icon: 'server'
    },
    files: []
}
];
export const navData = appData.map((x) => x.head);
export const pageData = appData.map((x) => x.head);

export default appData;

