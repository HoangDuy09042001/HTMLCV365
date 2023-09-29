let cv2 = {}

$('#submit').click(function(){
    console.log(cv2)
})

// lấy thông tin chung
$('#name-input').change(function() {
    if($(this).val()){
        cv2.name = $(this).val()
    }else{
        delete cv2.name
    }
});
$('#job-input').change(function() {
    if($(this).val()){
        cv2.job = $(this).val()
    }else{
        delete cv2.job
    }
});
$('#abstract-input').change(function() {
    if($(this).val()){
        cv2.abstract = $(this).val()
    }else{
        delete cv2.abstract
    }
});

// lấy thông tin ngôn ngữ
$('#add-language').click(function() {
    if($('#language-title-input').val() && $('#language-value-input').val()){
        if(cv2.language === undefined){
            cv2.language = {title:'NGÔN NGỮ'}
        }
        if(cv2.language.contents){
            cv2.language.contents.push({
                title : $('#language-title-input').val(),
                value: $('#language-value-input').val()
            })
        }else{
            cv2.language.contents = []
            cv2.language.contents.push({
                title : $('#language-title-input').val(),
                value: $('#language-value-input').val()
            })
        }
        $('#language-title-input').val("");
        $('#language-value-input').val("");
    }else{
        alert('Cần nhập đủ thông tin của mục ngôn ngữ')
    }
})

//lấy thông tin kỹ năng
$('#add-skills').click(function() {
    if($('#skills-title-input').val() && $('#skills-value-input').val()){
        if(cv2.skills === undefined){
            cv2.skills = {title:'KỸ NĂNG'}
        }
        if(cv2.skills.contents){
            cv2.skills.contents.push({
                title : $('#skills-title-input').val(),
                value: $('#skills-value-input').val()
            })
        }else{
            cv2.skills.contents = []
            cv2.skills.contents.push({
                title : $('#skills-title-input').val(),
                value: $('#skills-value-input').val()
            })
        }
        $('#skills-title-input').val("");
        $('#skills-value-input').val("");
    }else{
        alert('Cần nhập đủ thông tin của mục kỹ năng')
    }
})

//lấy thông tin liên hệ
$('#add-contact').click(function() {
    if($('#contact-title-input').val() && $('#contact-context-input').val()){
        if(cv2.contact === undefined){
            cv2.contact = {title:'THÔNG TIN LIÊN HỆ'}
        }
        if(cv2.contact.contents){
            cv2.contact.contents.push({
                title : $('#contact-title-input').val(),
                context: $('#contact-context-input').val()
            })
        }else{
            cv2.contact.contents = []
            cv2.contact.contents.push({
                title : $('#contact-title-input').val(),
                context: $('#contact-context-input').val()
            })
        }
        $('#contact-title-input').val("");
        $('#contact-context-input').val("");
    }else{
        alert('Cần nhập đủ thông tin của mục thông tin liên hệ')
    }
})

//lấy thông tin kinh nghiệm làm việc
$('#add-exp').click(function() {
    if($('#exp-date-input').val() && $('#exp-context-input').val()){
        if(cv2.exp === undefined){
            cv2.exp = {title:'KINH NGHIỆM LÀM VIỆC'}
        }
        if(cv2.exp.contents){
            cv2.exp.contents.push({
                date : $('#exp-date-input').val(),
                context: $('#exp-context-input').val()
            })
        }else{
            cv2.exp.contents = []
            cv2.exp.contents.push({
                date : $('#exp-date-input').val(),
                context: $('#exp-context-input').val()
            })
        }
        $('#exp-date-input').val("");
        $('#exp-context-input').val("");
    }else{
        alert('Cần nhập đủ thông tin của mục thông tin liên hệ')
    }
})