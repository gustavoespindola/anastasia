// eslint-disable-next-line no-unused-vars
const mainPasswordModule = function(event, fileOptions) {
    $('#modal-password').on('hidden.bs.modal', function() {
        passwordModuleController.resetModal();
    });

    $('#modal-password').on('shown.bs.modal', function() {
        $('#current-password-module').focus();
    });

    $('#btnSavePasswordModule').click(function() {
        var modulePasswordUsersPk = globalCredentials.id;
        var modulePasswordCompanyPk = globalCredentials.company.id;
        passwordModuleController.validateForm(function(err) {
            if (!err) {
                let oldPassword = $('#current-password-module').val();
                let newPassword = $('#new-password-module').val();

                passwordModuleController.matchPassword(oldPassword, modulePasswordUsersPk, function(row) {
                    if (row.error) {
                        $('#current-password-module').addClass('is-invalid');
                        $('#current-password-module').focus();
                        $('#current-password-module').select();
                        $('#btnSavePasswordModule').prop('disabled', false);
                        if (row.error === 'sorry') {
                            global.sendMessage('danger', `<i class="fa fa-info-circle" aria-hidden="true"></i> ${language.message.weAreSorry}`);
                        } else {
                            global.sendMessage('danger', `<i class="fa fa-info-circle" aria-hidden="true"></i> ${language.password.notCorrectPassword}`);
                        }

                    } else {
                        global.openLoadingModal();
                        passwordModuleController.saveForm(newPassword, modulePasswordUsersPk, function(row) {
                            if (row.error) {
                                $('#current-password-module').addClass('is-invalid');
                                $('#current-password-module').focus();
                                $('#btnSavePasswordModule').prop('disabled', false);
                                global.closeLoadingModal();
                                global.sendMessage('danger', `<i class="fa fa-info-circle" aria-hidden="true"></i> ${language.message.weAreSorry}`);
                            } else {
                                $('#btnSavePasswordModule, .inputPassModule').attr('disabled', 'disabled');

                                /* Insert Logs */
                                let commentLogs = 'modificó contraseña desde formulario opciones de usuario.';
                                global.saveLog(modulePasswordUsersPk, modulePasswordCompanyPk, 'CONFIGURACION', commentLogs, function(row) {
                                    global.sendMessage('success', `<i class="fa fa-check" aria-hidden="true"></i> ${language.password.successPassword}`);
                                    event.notify({ modulePasswordUsersPk });
                                    global.closeLoadingModal();
                                    $('#modal-password').modal('hide');
                                });

                            }
                        });
                    }
                });
            }
        });
    });

    $('.form-password-module :input').click(function() {
        $(this).removeClass('is-invalid');
    });

};
