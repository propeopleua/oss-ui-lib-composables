import type { ComputedRef, UnwrapRef } from 'vue';

export default interface FormInterfaceV2 {
  submit(): void;
  /* eslint-disable-next-line */
  input(name: string): any;
  // eslint-disable-next-line no-unused-vars
  inputChangeHandler: (newValue: unknown, name: string) => void;
  isValid: ComputedRef<boolean>;
  value: {
    value: UnwrapRef<unknown>;
  };
  reset: () => void;
  // eslint-disable-next-line no-unused-vars
  setValues: (values: unknown) => void;
  // eslint-disable-next-line no-unused-vars
  setErrors: (respErrors: Record<string, string>) => void;
  errors: unknown;
}
