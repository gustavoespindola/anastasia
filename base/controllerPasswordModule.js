// eslint-disable-next-line no-unused-vars
var savedDocumentModulePassword = false;
let passwordModuleController = {
    resetModal() {
        $('.form-password-module :input').each((index, el) => {
            $(el).val('');
            $(el).removeClass('is-invalid');
        });
        $('#inputPassModule').prop('disabled', false);
        $('#btnSavePasswordModule').prop('disabled', false);
    },
    validateForm: (cb) => {
        let err = false;
        $('.form-password-module :input').each((index, element) => {
            if (String($(element).attr('required')) === 'required') {
                if (!$(element).val() || $(element).val() === null || $(element).val() === '') {
                    $(element).addClass('is-invalid');
                    err = true;
                }
            }
        });
        if ($('#new-password-module').val() !== $('#repeat-password-module').val()) {
            err = true;
            $('#new-password-module, #repeat-password-module').addClass('is-invalid');
            global.sendMessage('danger', language.password.notMatchPassword);
        }
        cb(err);
    },
    matchPassword: (oldPassword, usersPk, cb) => {
        $.ajax({
            url: '/api/password/',
            type: 'GET',
            dataType: 'json',
            data: { usersPk, oldPassword }
        }).done(function(response) {
            cb(response);
        });
    },
    saveForm: (newPassword, usersPk, cb) => {
        $.ajax({
            url: '/api/password',
            type: 'PATCH',
            dataType: 'json',
            data: { usersPk, newPassword }
        }).done(function(response) {
            cb(response);
        });
    }
};
