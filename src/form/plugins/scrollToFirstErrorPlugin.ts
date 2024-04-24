import get from 'lodash-es/get'
import type { Ref } from 'vue'
import scrollTo from '@/utils/scrollTo'

export default () => {
  const scrollToFirstError = () => {
    if (!props.scrollToFirstError) {
      return;
    }

    let scrollTop = 0;
    let topFieldName = '';

    const resolvedErrors = props.errorsResolver
      ? props.errorsResolver(errors.value as unknown as Record<string, unknown>)
      : Object.keys(errors.value as unknown as object);

    resolvedErrors.forEach((name: string) => {
      const fieldRef = get(inputRefs, name);
      if (!fieldRef) {
        return;
      }

      const field = ((fieldRef as Ref)?.value as Ref)?.value as HTMLElement;
      if (!field) {
        return;
      }
      const fieldTop = field.getBoundingClientRect().top;

      if (fieldTop < scrollTop || !scrollTop) {
        scrollTop = fieldTop;
        topFieldName = name;
      }
    });

    const needScroll = props.beforeScroll?.(topFieldName) || true;
    if (needScroll && scrollTop) {
      scrollTo(scrollTop);
    }
  };
}
