import type FormInterface from './type/FormInterface';
import get from 'lodash-es/get';
import set from 'lodash-es/set';
import isEqual from 'lodash-es/isEqual';
import cloneDeep from 'lodash-es/cloneDeep';
import { computed, reactive, ref, onUnmounted } from 'vue';
import type { Ref, UnwrapRef } from 'vue';
import scrollTo from '../utils/scrollTo';

interface FormProps<T = Record<string, unknown>> {
  initialValues: T;
  validate?: (values: T) => Promise<Record<string, string>>;
  validateValue?: (value: unknown) => Promise<null | undefined | string>;
  onSubmit: (value: unknown) => void | Promise<void>;
  submitOnChange?: boolean;
  onUpdate?: (key: string, value: unknown) => void;
  scrollToFirstError?: boolean;
  beforeScroll?: (name: string) => boolean;
  errorsResolver?: (errors: Record<string, unknown>) => string[];
  detectChangesMsg?: string;
}

export default function useForm<S = unknown>(props: FormProps<S>): FormInterface {
  const inputRefs: Record<string, Ref> = {};
  const value = reactive({ value: cloneDeep(props.initialValues), update: (new Date()).getTime() });
  const isSubmitted = ref<boolean>(false);
  const responseErrors = ref<Record<string, string>>({});
  const errors = computed(() => {
    if (Object.keys(responseErrors.value).length) {
      return responseErrors.value;
    }

    return props.validate?.(value.value as unknown as S);
  });
  const isValid = computed(() => !Object.keys(errors.value as unknown as object).length);

  const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
    if (!isEqual(props.initialValues, value.value)) {
      event.returnValue = props.detectChangesMsg;
    }
  };

  if (props.detectChangesMsg) {
    window.addEventListener('beforeunload', beforeUnloadHandler);

    onUnmounted(() => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    });
  }

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

      if (
        fieldTop < scrollTop
        || !scrollTop
      ) {
        scrollTop = fieldTop;
        topFieldName = name;
      }
    });

    const needScroll = props.beforeScroll?.(topFieldName) || true;
    if (needScroll && scrollTop) {
      scrollTo(scrollTop);
    }
  };

  const setResponseErrors = (respErrors: Record<string, string>) => {
    const newErrors: Record<string, string> = {};
    for (const [key, err] of Object.entries(respErrors)) {
      set(newErrors, key, err);
    }
    responseErrors.value = newErrors;

    scrollToFirstError();
  };

  const submit = () => {
    isSubmitted.value = true;
    responseErrors.value = {};
    value.update = (new Date()).getTime();
    if (!isValid.value) {
      return;
    }

    props.onSubmit(value.value);

    window.removeEventListener('beforeunload', beforeUnloadHandler);
  };

  /* eslint-disable-next-line */
  function input(name: string): any {
    const inputRef = ref<unknown>(null);
    set(inputRefs, name, inputRef);

    return {
      ref: (el: unknown) => {
        inputRef.value = el;
      },
      name,
      modelValue: get(value, `value.${name}`) as string,
      error: isSubmitted.value
        ? get(errors.value, name) as string | undefined
        : null,
    };
  }

  const error = (name: string): string | null => get(errors.value, name) as string | null;

  const inputChangeHandler = async (newValue: unknown, name: string) => {
    set(value, `value.${name}`, newValue);
    set(responseErrors.value, name, undefined);
    props.onUpdate?.(name, newValue);

    if (props.submitOnChange) {
      submit();
    }
  };

  const reset = () => {
    set(value, `value`, cloneDeep(props.initialValues));
    responseErrors.value = {};

    if (props.submitOnChange) {
      submit();
    }
  };

  const setValues = (values: unknown) => {
    value.value = cloneDeep(values) as UnwrapRef<S>;
  };

  return {
    value,
    submit,
    input,
    error,
    setResponseErrors,
    inputChangeHandler,
    isValid: isValid.value,
    reset,
    setValues,
    errors: errors as unknown,
  };
}
