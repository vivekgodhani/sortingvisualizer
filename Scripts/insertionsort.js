function insertionSort() {
    let i, key, j;
    n = array_size;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {



            div_update(j + 2, arr[j + 1], colorred);
            div_update(j + 1, arr[j], colorred);

            arr[j + 1] = arr[j];

            div_update(j + 1, arr[j], colorgreen);
            div_update(j + 2, arr[j + 1], colorgreen);
            j = j - 1;
        }

        div_update(j + 2, arr[j + 1], colorred);
        arr[j + 1] = key;
        div_update(j + 2, arr[j + 1], colorgreen);

        div_update(i + 1, arr[i], colorgreen);
    }
}
