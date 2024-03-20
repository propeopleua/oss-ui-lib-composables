import isNull from 'lodash-es/isNull';

export default function recordToFormData(payload: Record<string, unknown>, path = '', fd = new FormData()) {
  return Object.entries(payload).reduce((data, [key, value]) => {
    const formattedKey = path.length ? `${path}[${key}]` : key;

    if (isNull(value)) {
      return data;
    }

    if (value instanceof Array || value instanceof FileList) {
      for (const [subIndex, subValue] of Object.entries(Array.from(value))) {
        if (subValue instanceof File || typeof subValue !== 'object') {
          data.append(`${formattedKey}[${subIndex}]`, subValue);
        } else {
          recordToFormData(subValue, `${formattedKey}[${subIndex}]`, data);
        }
      }
    } else if (value instanceof File) {
      data.append(formattedKey, value as unknown as string);
    } else if (typeof value === 'boolean') {
      data.append(formattedKey, Number(value) as unknown as string);
    } else if (typeof value === 'object') {
      recordToFormData(value as Record<string, unknown>, formattedKey, data);
    } else {
      data.append(formattedKey, value as unknown as string);
    }

    return data;
  }, fd);
}
