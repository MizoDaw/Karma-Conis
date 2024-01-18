export const TranslateObject = (array: any[] = [], lanCode: string, key: string): string => {
    if (array.length <= 1) {
        return ' ';
    }

    for (let index = 0; index < array.length; index++) {
        if (array[index].locale === lanCode) {
            return array[index][key];
        }
    }

    return array[0][key] || ' ';
};