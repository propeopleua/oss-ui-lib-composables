import type { Ref } from 'vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { createPopper, type Placement, type Instance } from '@popperjs/core';

interface Props {
  // eslint-disable-next-line no-undef
  triggerRef: Ref<HTMLElement>;
  // eslint-disable-next-line no-undef
  popupRef: Ref<HTMLElement>;
  placement: Placement;
  offset?: {
    x: number;
    y: number;
  };
}

export default function usePopper(props: Props) {
  const popper = ref<Instance | null>(null);

  onMounted(() => {
    popper.value = createPopper(props.triggerRef.value, props.popupRef.value, {
      placement: props.placement,
      modifiers: props.offset
        ? [
            {
              name: 'offset',
              options: {
                offset: [props.offset.x, props.offset.y],
              },
            },
          ]
        : [],
    });
  });

  onUnmounted(() => {
    popper.value?.destroy();
  });

  return popper;
}
