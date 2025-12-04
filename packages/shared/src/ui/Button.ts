import { defineComponent, h } from 'vue';
import { cn } from '../lib/cn';

export const Button = defineComponent({
  name: 'UiButton',
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    as: {
      type: String,
      default: 'button'
    }
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        props.as,
        {
          class: cn(
            'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
            props.variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
            props.variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            attrs.class as string | undefined
          ),
          ...attrs
        },
        slots.default?.()
      );
  }
});
