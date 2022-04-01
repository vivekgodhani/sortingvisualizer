const range = document.getElementById('arrsize'),
    range2 = document.getElementById('time'),
    setValue = () => {
        const
            newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
            newPosition = 16 - (newValue * 0.32);

        document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
        array_size = parseInt(range.value);
        generate_array();
    },
    setValue2 = () => {
        const
            newValue = Number((range2.value - range2.min) * 100 / (range2.max - range2.min)),
            newPosition = 16 - (newValue * 0.32);
        document.documentElement.style.setProperty("--range-progress2", `calc(${newValue}% + (${newPosition}px))`);
        delay_time = parseInt(range2.value);

    };
document.addEventListener("DOMContentLoaded", setValue);
document.addEventListener("DOMContentLoaded", setValue2);
range.addEventListener('input', setValue);
range2.addEventListener('input', setValue2);