import type { UnwrapRef } from 'vue';

export default interface FormInterface {
  submit(): void;
  /* eslint-disable-next-line */
  input(name: string): any;
  inputChangeHandler: (newValue: unknown, name: string) => void;
  isValid: boolean;
  value: {
    value: UnwrapRef<unknown>;
  };
  reset: () => void;
  setValues: (values: unknown) => void;
  setResponseErrors: (respErrors: Record<string, string>) => void;
  error: (name: string) => string | null;
  errors: unknown;
}
