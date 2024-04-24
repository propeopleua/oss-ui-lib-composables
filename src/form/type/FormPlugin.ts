export default interface FormPlugin {
  // eslint-disable-next-line no-unused-vars
  setup: (form: unknown) => void;
  // eslint-disable-next-line no-unused-vars
  input?: (name: string) => Record<string, unknown>;
  // eslint-disable-next-line no-unused-vars
  onChange?: (name: string, value: unknown) => void;
  beforeSubmit?: () => void;
}
