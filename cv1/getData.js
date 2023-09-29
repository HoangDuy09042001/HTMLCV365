let cv1 = {}

const sendData = function () {
    console.log(cv1)

    var iframe = document.getElementById('myIframe');
    var iframeUrl = iframe.src;
    console.log(iframeUrl)
    function truyenMangVaoIframe() {
        if (iframe) {
            var jsonArray = JSON.stringify(cv1);
            iframe.contentWindow.postMessage(jsonArray, iframeUrl);
        }
    }

    truyenMangVaoIframe();
}
$('#submit').click(sendData)

// lấy thông tin chung
$('#name-input').change(function () {
    if ($(this).val()) {
        cv1.name = $(this).val()
        sendData()
    } else {
        delete cv1.name
    }
});
$('#job-input').change(function () {
    if ($(this).val()) {
        cv1.job = $(this).val()
        sendData()
    } else {
        delete cv1.job
    }
});

//lấy thông tin mục tiêu nghề nghiệp
$('#add-aim').click(function () {
    if ($('#aim-title-input').val() && $('#aim-context-input').val()) {
        if (cv1.aim === undefined) {
            cv1.aim = { title: 'MỤC TIÊU NGHỀ NGHIỆP' }
        }
        if (cv1.aim.contents) {
            cv1.aim.contents.push({
                title: $('#aim-title-input').val(),
                context: $('#aim-context-input').val()
            })
        } else {
            cv1.aim.contents = []
            cv1.aim.contents.push({
                title: $('#aim-title-input').val(),
                context: $('#aim-context-input').val()
            })
        }
        $('#aim-title-input').val("");
        $('#aim-context-input').val("");
    } else {
        alert('Cần nhập đủ thông tin của mục tiêu nghề nghiệp')
    }
});

//lấy thông tin kinh nghiệm
$('#add-exp').click(function () {
    if ($('#exp-com_name-input').val() && $('#exp-date-input').val() &&
        $('#exp-job-input').val() && $('#exp-context-input').val()
    ) {
        if (cv1.exp === undefined) {
            cv1.exp = { title: 'KINH NGHIỆM LÀM VIỆC' }
        }
        if (cv1.exp.contents) {
            cv1.exp.contents.push({
                com_name: $('#exp-com_name-input').val(),
                date: $('#exp-date-input').val(),
                job: $('#exp-job-input').val(),
                context: $('#exp-context-input').val(),
            })
        } else {
            cv1.exp.contents = []
            cv1.exp.contents.push({
                com_name: $('#exp-com_name-input').val(),
                date: $('#exp-date-input').val(),
                job: $('#exp-job-input').val(),
                context: $('#exp-context-input').val(),
            })
        }
        $('#exp-com_name-input').val("");
        $('#exp-date-input').val("");
        $('#exp-job-input').val("");
        $('#exp-context-input').val("");
    } else {
        alert('Cần nhập đủ thông tin của mục kinh nghiệm làm việc')
    }
});

// lấy thông tin người tham chiếu
$('#add-conference').click(function () {
    if ($('#conference-title-input').val() && $('#conference-context-input').val()) {
        if (cv1.conference === undefined) {
            cv1.conference = { title: 'NGƯỜI THAM CHIẾU' }
        }
        if (cv1.conference.person) {
            cv1.conference.person.push({
                name: $('#conference-title-input').val(),
                context: $('#conference-context-input').val()
            })
        } else {
            cv1.conference.person = []
            cv1.conference.person.push({
                name: $('#conference-title-input').val(),
                context: $('#conference-context-input').val()
            })
        }
        $('#conference-title-input').val("");
        $('#conference-context-input').val("");
    } else {
        alert('Cần nhập đủ thông tin của mục người tham chiếu')
    }
});

//lấy thông tin cá nhân
$('#personal_info-date_of_birth-input').change(function () {
    if ($(this).val()) {
        if (cv1.personal_info === undefined) {
            cv1.personal_info = {}
            cv1.personal_info.date_of_birth = $(this).val()
        } else {
            cv1.personal_info.date_of_birth = $(this).val()
        }
        sendData()
    } else {
        delete cv1.personal_info.date_of_birth
    }
});
$('#personal_info-phone-input').change(function () {
    if ($(this).val()) {
        if (cv1.personal_info === undefined) {
            cv1.personal_info = {}
            cv1.personal_info.phone = $(this).val()
        } else {
            cv1.personal_info.phone = $(this).val()
        }
        sendData()
    } else {
        delete cv1.personal_info.phone
    }
});
$('#personal_info-mail-input').change(function () {
    if ($(this).val()) {
        if (cv1.personal_info === undefined) {
            cv1.personal_info = {}
            cv1.personal_info.mail = $(this).val()
        } else {
            cv1.personal_info.mail = $(this).val()
        }
        sendData()
    } else {
        delete cv1.personal_info.mail
    }
});
$('#personal_info-location-input').change(function () {
    if ($(this).val()) {
        if (cv1.personal_info === undefined) {
            cv1.personal_info = {}
            cv1.personal_info.location = $(this).val()
        } else {
            cv1.personal_info.location = $(this).val()
        }
        sendData()
    } else {
        delete cv1.personal_info.location
    }
});

// lấy thông tin dự án
$('#project-context-input').change(function () {
    if ($(this).val()) {
        if (cv1.project === undefined) {
            if(cv1.bonetree===undefined) cv1.bonetree = []
            cv1.project = {}
            cv1.project.title = 'DỰ ÁN THAM GIA'
            cv1.project.content = $(this).val()
            cv1.project.color = '#8f7cce'
            cv1.bonetree.push(cv1.project)
        } else {
            cv1.project.content = $(this).val()
            cv1.project.color = '#8f7cce'
            cv1.bonetree.push(cv1.project)
        }
    } else {
        delete cv1.project
    }
});

// lấy thông tin kỹ năng
$('#skill-context-input').change(function () {
    if ($(this).val()) {
        if (cv1.skill === undefined) {
            if(cv1.bonetree===undefined) cv1.bonetree = []
            cv1.skill = {}
            cv1.skill.title = 'KỸ NĂNG'
            cv1.skill.content = $(this).val()
            cv1.skill.color = '#00bbe8'
            cv1.bonetree.push(cv1.skill)
        } else {
            cv1.skill.content = $(this).val()
            cv1.skill.color = '#00bbe8'
            cv1.bonetree.push(cv1.skill)
        }
    } else {
        delete cv1.skill
    }
});

// lấy thông tin chứng chỉ
$('#degree-context-input').change(function () {
    if ($(this).val()) {
        if (cv1.degree === undefined) {
            if(cv1.bonetree===undefined) cv1.bonetree = []
            cv1.degree = {}
            cv1.degree.title = 'CHỨNG CHỈ'
            cv1.degree.content = $(this).val()
            cv1.degree.color = '#009393'
            cv1.bonetree.push(cv1.degree)
        } else {
            cv1.degree.content = $(this).val()
            cv1.degree.color = '#009393'
            cv1.bonetree.push(cv1.degree)
        }
    } else {
        delete cv1.degree
    }
});

// lấy thông tin sở thích
$('#hobby-context-input').change(function () {
    if ($(this).val()) {
        if (cv1.hobby === undefined) {
            if(cv1.bonetree===undefined) cv1.bonetree = []
            cv1.hobby = {}
            cv1.hobby.title = 'SỞ THÍCH'
            cv1.hobby.content = $(this).val()
            cv1.hobby.color = '#ffb200'
            cv1.bonetree.push(cv1.hobby)
        } else {
            cv1.hobby.content = $(this).val()
            cv1.hobby.color = '#ffb200'
            cv1.bonetree.push(cv1.hobby)
        }
    } else {
        delete cv1.hobby
    }
});

// lấy thông tin giải thưởng
$('#gift-context-input').change(function () {
    if ($(this).val()) {
        if (cv1.gift === undefined) {
            if(cv1.bonetree===undefined) cv1.bonetree = []
            cv1.gift = {}
            cv1.gift.title = 'GIẢI THƯỞNG'
            cv1.gift.content = $(this).val()
            cv1.gift.color = '#fa9035'
            cv1.bonetree.push(cv1.gift)
        } else {
            cv1.gift.content = $(this).val()
            cv1.gift.color = '#fa9035'
            cv1.bonetree.push(cv1.gift)
        }
    } else {
        delete cv1.gift
    }
});

// lấy thông tin hoạt động
$('#activation-context-input').change(function () {
    if ($(this).val()) {
        if (cv1.activation === undefined) {
            if(cv1.bonetree===undefined) cv1.bonetree = []
            cv1.activation = {}
            cv1.activation.title = 'HOẠT ĐỘNG'
            cv1.activation.content = $(this).val()
            cv1.activation.color = '#8f7cce'
            cv1.bonetree.push(cv1.activation)
        } else {
            cv1.activation.contnxt = $(this).val()
            cv1.activation.color = '#8f7cce'
            cv1.bonetree.push(cv1.activation)
        }
    } else {
        delete cv1.activation
    }
});

// cv1.bonetree = []
// if(cv1.project) cv1.bonetree.push(cv1.project)
// if(cv1.skill) cv1.bonetree.push(cv1.skill)
// if(cv1.degree) cv1.bonetree.push(cv1.degree)
// if(cv1.hobby) cv1.bonetree.push(cv1.hobby)
// if(cv1.gift) cv1.bonetree.push(cv1.gift)
// if(cv1.activation) cv1.bonetree.push(cv1.activation)
