import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'height': '100%', 'visibility': 'visible', 'opacity': '1'
        })),
        state('out', style({
            'height': '0%', 'visibility': 'hidden', 'opacity': '0'
        })),
        transition('in => out', [group([
            animate('500ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('500ms ease-in-out', style({
                'height': '0%'
            })),
            animate('500ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('200ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('200ms ease-in-out', style({
                'height': '100%'
            })),
            animate('200ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
]