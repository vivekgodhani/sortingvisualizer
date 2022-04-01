
function selectionSort() {
    var i, j, min_idx;
    var n = array_size;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        div_update(min_idx + 1, arr[min_idx], coloryellow);
        for (j = i + 1; j < n; j++) {
            div_update(j + 1, arr[j], coloryellow);
            if (arr[j] < arr[min_idx]) {
                div_update(min_idx + 1, arr[min_idx], colorblue);
                min_idx = j;
                div_update(min_idx + 1, arr[min_idx], coloryellow);
            }
            else {
                div_update(j + 1, arr[j], colorblue);
            }
        }
        if (min_idx != i) {
            div_update(min_idx + 1, arr[min_idx], colorred);
            div_update(i + 1, arr[i], colorred);
            var temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
            div_update(min_idx + 1, arr[min_idx], colorblue);
        }
        div_update(i + 1, arr[i], colorgreen);
    }
    div_update(n, arr[n - 1], colorgreen)
}