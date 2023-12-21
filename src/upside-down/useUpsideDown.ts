import { ref } from 'vue';

interface PositionEvent {
  y: number;
}

export default function useUpsideDown() {
  const isUpsideDown = ref<boolean>(false);

  const checkUpsideDown = (event: PositionEvent) => {
    const halfHeight = window.innerHeight / 2;
    isUpsideDown.value = event.y > halfHeight;
  };

  return {
    isUpsideDown,
    checkUpsideDown,
  };
}
