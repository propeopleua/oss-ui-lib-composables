import { reactive } from 'vue';
import type { UnwrapNestedRefs } from 'vue';


interface TmplRefsResult<T> {
  tmplRefs: UnwrapNestedRefs<T>;
  toTmplRef: (name: keyof T) => (el: any) => void;
}

/**
 * Creates and manages template references in Vue 3 Composition API.
 *
 * @template T The shape of the object containing the refs. Each key of the object corresponds to a ref name,
 *             and the value is the type of the DOM element or component instance the ref is associated with.
 *
 * @returns {Object} An object containing the following properties:
 *  - 'tmplRefs': A reactive object of type 'T'. It stores the references to the DOM elements.
 *                The structure of 'tmplRefs' matches the generic type 'T'.
 *  - 'toTmplRef': A function that takes a key of type 'keyof T' and returns a ref assignment function.
 *                 This can be used in the template to bind a ref to an element.
 *
 * @example
 * // Creating Template Refs
 * const { tmplRefs, toTmplRef } = useTmplRefs<{ inputRef: HTMLInputElement }>();
 *
 * // Binding Refs in Template
 * <template>
 *   <input :ref="toTmplRef('inputRef')" />
 * </template>
 *
 * // Accessing Refs
 * onMounted(() => {
 *   if (tmplRefs.inputRef) {
 *     tmplRefs.inputRef.focus();
 *   }
 * });
 */
export const useTmplRefs = <T extends object>(): TmplRefsResult<T> => {
  const tmplRefs = reactive<T>({} as T);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toTmplRef = (name: keyof T) => (el: any) => ((tmplRefs as T)[name as keyof T] = el);

  return {
    tmplRefs,
    toTmplRef,
  };
};

export default useTmplRefs;
