function merge(l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++) {
        L[i] = arr[l + i];
        div_update(l + i + 1, arr[l + i], colorred);
    }
    for (var j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
        div_update(m + 2 + j, arr[m + 1 + j], colorred);
    }
    var i = 0;

    var j = 0;

    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            div_update(k + 1, arr[k], colorgreen);
            i++;
        }
        else {
            arr[k] = R[j];
            div_update(k + 1, arr[k], colorgreen);

            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        div_update(k + 1, arr[k], colorgreen);

        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        div_update(k + 1, arr[k], colorgreen);

        j++;
        k++;
    }
}
function mergeSort(l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    div_update(m + 1, arr[m], coloryellow);

    mergeSort(l, m);
    mergeSort(m + 1, r);
    merge(l, m, r);
}
