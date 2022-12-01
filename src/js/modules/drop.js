const drop = () => {
    const fileInputs = document.querySelectorAll('[name ="upload"]');

    ['dragenter', 'dragLeave', 'dragover', 'drop'].forEach(evetName=> {
    fileInputs.forEach(input => {
        input.addEventListener(evetName, preventDefaults, false);
         });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid red";
        item.closest('.file_upload').style.backgrouncolor = "rgba 0,0,0, .7";
    }
    function unhighlight(item) {
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgrounColor = "#fff";
        } else {
            item.closest('.file_upload').style.backgrounColor = "#ededed";
        }
    }

     ['dragenter', 'dragover'].forEach(evetName=> {
    fileInputs.forEach(input => {
        input.addEventListener(evetName, ()=> highlight(input), false);
         });
    });
     ['dragleave', 'drop'].forEach(evetName=> {
    fileInputs.forEach(input => {
        input.addEventListener(evetName, ()=> unhighlight(input), false);
         });
     });
    
    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files; 
            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;