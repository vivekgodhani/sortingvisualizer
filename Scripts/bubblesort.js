function Bubble() {
    c_delay = 0;

    for (var i = 0; i < array_size; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(j + 1, arr[j], coloryellow);//Color update

            if (arr[j] > arr[j + 1]) {
                div_update(j + 1, arr[j], colorred);//Color update
                div_update(j + 2, arr[j + 1], colorred);//Color update

                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                div_update(j + 1, arr[j], colorred);//Color update
                div_update(j + 2, arr[j + 1], colorred);
            }
            div_update(j + 1, arr[j], colorblue);//Color updat
        }
        div_update(j + 1, arr[j], colorgreen);//Color update
    }

}