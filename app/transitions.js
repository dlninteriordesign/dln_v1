/**
 * Liquid Fire Route Transitions
 *
 * The transition to use between different routes in the app.
 */
import $ from 'jquery';

export default function() {
    let isMobile = ($(window).width() < 640),
        useTransition = (isMobile ? 'toLeft' : 'toUp'),
        reverseTransition = (isMobile ? 'toRight' : 'toDown');

    // Index transition to and from Gallery.
    this.transition(
        this.fromRoute('index'),
        this.toRoute('gallery'),
        this.use(useTransition, { duration: 350 }),
        this.reverse(reverseTransition, { duration: 350 })
    );

    // Index transition to and from About.
    this.transition(
        this.fromRoute('index'),
        this.toRoute('about'),
        this.use(useTransition, { duration: 350 }),
        this.reverse(reverseTransition, { duration: 350 })
    );

    // Index transition to and from Contact.
    this.transition(
        this.fromRoute('index'),
        this.toRoute('contact'),
        this.use(useTransition, { duration: 350 }),
        this.reverse(reverseTransition, { duration: 350 })
    );

    // Gallery transition to and from About.
    this.transition(
        this.fromRoute('gallery'),
        this.toRoute('about'),
        this.use(useTransition, { duration: 350 }),
        this.reverse(reverseTransition, { duration: 350 })
    );

    // Gallery transition to and from Contact.
    this.transition(
        this.fromRoute('gallery'),
        this.toRoute('contact'),
        this.use(useTransition, { duration: 350 }),
        this.reverse(reverseTransition, { duration: 350 })
    );

    // About transition to and from Contact.
    this.transition(
        this.fromRoute('about'),
        this.toRoute('contact'),
        this.use(useTransition, { duration: 350 }),
        this.reverse(reverseTransition, { duration: 350 })
    );
}
