import type FormInterfaceV2 from './type/FormInterfaceV2';
import get from 'lodash-es/get';
import set from 'lodash-es/set';
import cloneDeep from 'lodash-es/cloneDeep';
import type { UnwrapRef } from 'vue';
import { computed, reactive } from 'vue';
import type FormPlugin from './type/FormPlugin';

interface FormProps<T = Record<string, unknown>> {
  initialValues: T;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (value: unknown) => void | Promise<void>;
  plugins?: FormPlugin[];
}

export default function useFormV2<S = unknown>(props: FormProps<S>): FormInterfaceV2 {
  const value = reactive({ value: cloneDeep(props.initialValues), update: 0 });
  const errors = reactive({ errors: {} });
  const isValid = computed(() => !Object.keys(errors.errors).length);

  const getPluginFormData = () => ({
    value,
    errors,
    isValid,
    submit,
  });

  props.plugins?.forEach((plugin) => plugin.setup(getPluginFormData()));

  const setErrors = (respErrors: Record<string, string>) => {
    const newErrors: Record<string, string> = {};
    for (const [key, err] of Object.entries(respErrors)) {
      set(newErrors, `errors.${key}`, err);
    }

    errors.errors = newErrors;
  };

  const submit = () => {
    props.plugins?.forEach((plugin) => plugin.beforeSubmit?.());
    if (!isValid.value) {
      return;
    }

    props.onSubmit(value.value);
  };

  /* eslint-disable-next-line */
  function input(name: string): any {
    const inputExtendedFields =
      props.plugins?.reduce((prev, plugin) => {
        return {
          ...prev,
          ...(plugin.input?.(name) || {}),
        };
      }, {}) || {};

    return {
      name,
      modelValue: get(value, `value.${name}`) as string,
      error: get(errors.errors, `errors.${name}`, null),
      ...inputExtendedFields,
    };
  }

  const inputChangeHandler = async (newValue: unknown, name: string) => {
    set(value, `value.${name}`, newValue);
    props.plugins?.forEach((plugin) => plugin.onChange?.(name, newValue));
  };

  const reset = () => {
    set(value, `value`, cloneDeep(props.initialValues));
  };

  const setValues = (values: unknown) => {
    value.value = cloneDeep(values) as UnwrapRef<S>;
  };

  return {
    value,
    submit,
    input,
    setErrors,
    inputChangeHandler,
    isValid,
    reset,
    setValues,
    errors: errors as unknown,
  };
}
