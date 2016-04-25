var app = angular.module('Website', ['ngSanitize']);

    var siteInfo = {
        name: 'This Website',
        logo: 'http://placehold.it/180x60',
        phone: '01234 567890',
    }

    var siteMenu = {
        links: [
            { href: '#', title: 'Home', sub: null },

            { href: '#', title: 'Menu One', sub: [
                { href: '#', title: 'Option One', sub: null },
                { href: '#', title: 'Option Two', sub: null },
                { href: '#', title: 'Option Three', sub: null },
                { href: '#', title: 'Option Four', sub: null },
     		]},

            { href: '#', title: 'Menu Two', sub: null },

            { href: '#', title: 'Menu One', sub: [
                { href: '#', title: 'Option One', sub: null },
                { href: '#', title: 'Option Two', sub: null },
                { href: '#', title: 'Option Three', sub: null },
                { href: '#', title: 'Option Four', sub: null },
     		]},
        ]
    };

    var siteEvent = {
        date: '12/06/2017',
        name: 'The Great Event',
        logo: 'http://placehold.it/255x140',
        address: 'A Road, A Town, A County, Postcode',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod.',
        images: [
            { title: 'Event', src: 'img/event/event_01.jpg'},
            { title: 'Event', src: 'img/event/event_02.jpg'},
            { title: 'Event', src: 'img/event/event_03.jpg'},
            { title: 'Event', src: 'img/event/event_04.jpg'},
        ],
        tabs: [
            {
                id: 1,
                title: 'Tab One',
                content: '<h5>Tab One</h5><p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p><p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>'
            },
            {
                id: 2,
                title: 'Directions',
                content: '<iframe class="map-container" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA80S_nXL95verAh4fqgCvlP7nC6XRYwtk&amp;q=51.788521,0.973136&amp;zoom=7&amp;maptype=roadmap" width="320" height="290" frameborder="0" style="border:0" class="float-right, show-for-medium"></iframe><h5>Title</h5><p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p><h5>Another Title</h5><p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>',
            },
            {
                id: 3,
                title: 'Tab Three',
                content: '<h5>Tab Three</h5><p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p><p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>',
            },

        ],
    };








    var parkData = {
        logo: 'http://placehold.it/255x140',
        name: 'Park Resorts Coopers Beach',
        address: 'A Road, A Town, A County, Postcode',
        group: 'Parks',
        images: [
            { title: 'Caravan', src: 'http://placekitten.com/g/600/338'},
            { title: 'Crabs', src: 'http://placehold.it/600x338'},
            { title: 'Dinding', src: 'http://placekitten.com/g/600/338'},
            { title: 'Kids Pool', src: 'http://placehold.it/600x338'},
            { title: 'Pool', src: 'http://placekitten.com/g/600/338'},
            { title: 'Row', src: 'http://placehold.it/600x338'},
        ],

        facilities: [
            { title: 'Ammusements', image: 'image here' },
            { title: 'Boat Launching Ramp', image: 'image here' },
            { title: 'Childrens Playground', image: 'image here' },
            { title: 'Childrens Splash Pool', image: 'image here' },
            { title: 'Direct Beach Access', image: 'image here' },
            { title: 'Heated Indoor Pool', image: 'image here' },
            { title: 'Outdoor Pool (open 22nd May to 31st August)', image: 'image here' },
            { title: 'Multi-Sports Court', image: 'image here' },
            { title: 'Tennis Court Sports', image: 'image here' },
        ],
        entertainment: [
            { title: 'Comedians, Bands and Tribute Acts', image: 'image here' },
            { title: 'Darts', image: 'image here' },
            { title: 'Giant Pub Quizes with prizes', image: 'image here' },
            { title: 'Leisurely Entertainment', image: 'image here' },
            { title: 'Live Entertainment', image: 'image here' },
        ],
        dining: [
            { title: 'Cafe & Takeaway', image: 'image here' },
            { title: 'Convenience Store', image: 'image here' },
        ],
        attractions: [
            {
                title: 'Attraction One',
                content: '<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>',
                image: 'http://placehold.it/100x100',
                link: null,
            },
            {
                title: 'Attraction Two',
                content: '<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>',
                image: 'http://placehold.it/100x100',
                link: '#',
            },
            {
                title: 'Attraction Three',
                content: '<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>',
                image: 'http://placehold.it/100x100',
                link: '#',
            },
            {
                title: 'Attraction Four',
                content: '<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>',
                image: 'http://placehold.it/100x100',
                link: null,
            },
        ],
    };

    app.controller('SiteController', function() {
        this.info = siteInfo;
        this.menu = siteMenu;
        this.details = siteEvent;
    });
