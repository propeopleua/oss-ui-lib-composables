import isEqual from 'lodash-es/isEqual'
import { onMounted, onUnmounted } from 'vue'

export default () => {
  const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
    if (!isEqual(props.initialValues, value.value)) {
      event.returnValue = props.detectChangesMsg;
    }
  };

  onMounted(() => {
    if (props.detectChangesMsg) {
      window.addEventListener('beforeunload', beforeUnloadHandler);
    }
  });

  onUnmounted(() => {
    window.removeEventListener('beforeunload', beforeUnloadHandler);
  });

}
