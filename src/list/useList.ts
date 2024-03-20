import useForm from '../form/useForm';
import { onMounted } from 'vue';
import type { SortingState } from './type/SortingState';
import type FormInterface from '../form/type/FormInterface';

interface Props<T> {
  defaultValue: T;
  getInitialValue: () => T;
  onUpdate?: (key: string) => void;
  onSubmit: (value: unknown) => void;
}

interface ListConfig<T> {
  form: FormInterface;
  tableSortHandler: (params: SortingState) => void;
  pageChangeHandler: (newPage: number) => void;
}

export default function useList<T>(props: Props<T>): ListConfig<T> {
  const form = useForm<T>({
    initialValues: props.defaultValue,
    submitOnChange: true,
    onUpdate: (key: string) => {
      if (key !== 'page') {
        form.inputChangeHandler(1, 'page');
      }

      props.onUpdate?.(key);
    },
    onSubmit: props.onSubmit,
  });

  onMounted(() => {
    form.setValues(props.getInitialValue());
  });

  const tableSortHandler = (params: SortingState) => {
    form.inputChangeHandler(params, 'sorting');
  };

  const pageChangeHandler = (newPage: number) => {
    form.inputChangeHandler(newPage, 'page');
  };

  return {
    form,
    tableSortHandler,
    pageChangeHandler,
  };
}
