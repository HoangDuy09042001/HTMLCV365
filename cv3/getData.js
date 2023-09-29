let cv3 = {}

$('#submit').click(function(){
    console.log(cv3)
})

// lấy thông tin chung
$('#name-input').change(function() {
    if($(this).val()){
        cv3.name = $(this).val()
        if(cv3.name){
            $('#name').text(cv3.name)
        }else{
            $('#name').text('')
        }
    }else{
        delete cv3.name
    }
    
});
$('#job-input').change(function() {
    if($(this).val()){
        cv3.job = $(this).val()
    }else{
        delete cv3.job
    }
});

//lấy thông tin học vấn
$('#add-edu').click(function() {
    if($('#edu-school_name-input').val() && $('#edu-date-input').val() && $('#edu-context-input').val()){
        if(cv3.edu === undefined){
            cv3.edu = {title:'HỌC VẤN'}
        }
        if(cv3.edu.contents){
            cv3.edu.contents.push({
                school_name : $('#edu-school_name-input').val(),
                date: $('#edu-date-input').val(),
                context: $('#edu-context-input').val()
            })
        }else{
            cv3.edu.contents = []
            cv3.edu.contents.push({
                school_name : $('#edu-school_name-input').val(),
                date: $('#edu-date-input').val(),
                context: $('#edu-context-input').val()
            })
        }
        $('#edu-school_name-input').val("");
        $('#edu-date-input').val("");
        $('#edu-context-input').val("")
    }else{
        alert('Cần nhập đủ thông tin của mục học vấn')
    }
});

//lấy thông tin kinh nghiệm
$('#add-exp').click(function() {
    if($('#exp-come_name-input').val() && $('#exp-date-input').val() && $('#exp-context-input').val()){
        if(cv3.exp === undefined){
            cv3.exp = {title:'KINH NGHIỆM'}
        }
        if(cv3.exp.contents){
            cv3.exp.contents.push({
                come_name : $('#exp-come_name-input').val(),
                date: $('#exp-date-input').val(),
                context: $('#exp-context-input').val()
            })
        }else{
            cv3.exp.contents = []
            cv3.exp.contents.push({
                come_name : $('#exp-come_name-input').val(),
                date: $('#exp-date-input').val(),
                context: $('#exp-context-input').val()
            })
        }
        $('#exp-come_name-input').val("");
        $('#exp-date-input').val("");
        $('#exp-context-input').val("")
    }else{
        alert('Cần nhập đủ thông tin của mục kinh nghiệm')
    }
});

//lấy thông tin liên hệ
$('#contact-phone-input').change(function() {
    if($(this).val()){
        if(cv3.contact === undefined){
            cv3.contact = {}
            cv3.contact.phone = $(this).val()
        }else{
            cv3.contact.phone = $(this).val()
        }
    }else{
        delete cv3.contact.phone
    }
});
$('#contact-email-input').change(function() {
    if($(this).val()){
        if(cv3.contact === undefined){
            cv3.contact = {}
            cv3.contact.email = $(this).val()
        }else{
            cv3.contact.email = $(this).val()
        }
    }else{
        delete cv3.contact.email
    }
});
$('#contact-address-input').change(function() {
    if($(this).val()){
        if(cv3.contact === undefined){
            cv3.contact = {}
            cv3.contact.address = $(this).val()
        }else{
            cv3.contact.address = $(this).val()
        }
    }else{
        delete cv3.contact.address
    }
});

//lấy thông tin kỹ năng
$('#add-skills').click(function() {
    if($('#skills-title-input').val() && $('#skills-value-input').val()){
        if(cv3.skills === undefined){
            cv3.skills = {title:'KỸ NĂNG'}
        }
        if(cv3.skills.contents){
            cv3.skills.contents.push({
                title : $('#skills-title-input').val(),
                value: $('#skills-value-input').val(),
            })
        }else{
            cv3.skills.contents = []
            cv3.skills.contents.push({
                title : $('#skills-title-input').val(),
                value: $('#skills-value-input').val(),
            })
        }
        $('#skills-title-input').val("");
        $('#skills-value-input').val("");
    }else{
        alert('Cần nhập đủ thông tin của mục kỹ năng')
    }
});

//lấy thông tin sở thích
$('#add-hobby').click(function() {
    if($('#hobby-contents-input').val()){
        let hobby = ''
        if(cv3.hobby === undefined){
            cv3.hobby = {title:'SỞ THÍCH'}
        }
        if(cv3.hobby.contents){
            cv3.hobby.contents.push(`${$('#hobby-contents-input').val()}`)
        }else{
            cv3.hobby.contents = []
            cv3.hobby.contents.push(`${$('#hobby-contents-input').val()}`)
        }
        $('#hobby-contents-input').val("");
    }else{
        alert('Cần nhập đủ thông tin của mục sở thích')
    }
})

//lấy thông tin ngoại ngữ
$('#add-language').click(function() {
    if($('#language-title-input').val() && $('#language-value-input').val()){
        if(cv3.language === undefined){
            cv3.language = {title:'NGOẠI NGỮ'}
        }
        if(cv3.language.contents){
            cv3.language.contents.push({
                title : $('#language-title-input').val(),
                value: $('#language-value-input').val(),
            })
        }else{
            cv3.language.contents = []
            cv3.language.contents.push({
                title : $('#language-title-input').val(),
                value: $('#language-value-input').val(),
            })
        }
        $('#language-title-input').val("");
        $('#language-value-input').val("");
    }else{
        alert('Cần nhập đủ thông tin của mục ngoại ngữ')
    }
});
