import type { UnwrapRef } from 'vue';

export interface FormInterface<S> {
  submit(): void;
  /* eslint-disable-next-line */
  input(name: string): any;
  inputChangeHandler: (newValue: unknown, name: string) => void;
  isValid: boolean;
  value: {
    value: UnwrapRef<S>;
  };
  reset: () => void;
  setValues: (values: unknown) => void;
  setResponseErrors: (respErrors: Record<string, string>) => void;
  error: (name: string) => string | null;
  errors: unknown;
}
