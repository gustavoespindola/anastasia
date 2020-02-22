/*eslint-disable no-unused-vars*/
var setCustomDefaults = function() {
    swal.mixin({
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-light'
    });
};
setCustomDefaults();
const global = {
    permissionForbidden: (text) => {
        text = text ? `<h5>${text}</h5>` : '';
        swal({
            title: 'ACERTA',
            html: `<h4>Usuario no tiene permisos para realizar esta acción</h4>${text}</h5><br>Consulte con su Administrador<br><br>`,
            type: 'warning',
            width: '40%'
        });
    },
    sendMessage: (type, message) => {
        type = type ? type : 'primary';
        $.notify({ message }, {
            type,
            z_index: 9999,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    },
    saveLog(users, companies, module, comment, cb) {
        $.ajax({
            url: '/api/logs',
            type: 'POST',
            dataType: 'json',
            data: { users, companies, module, comment }
        }).done(function(response) {
            if (cb) {
                cb(response);
            }
        });
    },
    replaceText(field) {
        let text = field;

        text = text.replace(/[,]/gi, '.');
        text = text.replace(/[']/gi, '´');
        text = text.replace(/["]/gi, '´');
        text = text.replace(/[;]/gi, '');

        return text;
    },

    replaceTime(field) {
        let text = field;
        text = text.replace('a few', 'unos pocos');
        text = text.replace('a year', 'un año');
        text = text.replace('years', 'años');
        text = text.replace('year', 'año');
        text = text.replace('a month', 'un mes');
        text = text.replace('mons', 'meses');
        text = text.replace('mon', 'mes');
        text = text.replace('a day', 'un día');
        text = text.replace('days', 'días');
        text = text.replace('day', 'día');
        text = text.replace('an hour', 'una hora');
        text = text.replace('hours', 'horas');
        text = text.replace('hour', 'hora');
        text = text.replace('a minute', 'un minuto');
        text = text.replace('minutes', 'minutos');
        text = text.replace('minute', 'minuto');
        text = text.replace('seconds', 'segundos');
        text = text.replace('second', 'segundo');
        return text;
    },
    /**
     * @param  {Array} array Arreglo de permisos del usuario
     * @param  {String} module Campo module de permisos
     * @param  {String} type Campo type de permisos
     */
    findRole(array, module, type) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].name === module && array[i].code === type) {
                return array[i];
            }
        }
        return null;
    },
    /**
     * @param {string} file Imagen cargada en Summernote
     * @param {string} path Carpeta donde se guardara el documento
     * @param {boolean} temp Estado almacenamiento temporal de imagen en servidor
     * @param {Function} cb Callback de retorno
     */
    uploadImageSummernote: (file, folder, temp, cb) => {
        data = new FormData();
        data.append('file', file);
        data.append('folder', folder);
        data.append('temp', temp);
        $.ajax({
            url: '/api/uploads/summernote',
            type: 'POST',
            data: data,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(response) {
            cb(response);
        });
    },
    /**
     * @param {Object} info Objecto que contiene el id de calendar o paciente cuando corresponda. EJ: info.calendar o  info.patient
     * @param {string} info.calendar Pk del agendamiento
     * @param {string} info.patient Pk del paciente
     * @param {string} path Carpeta donde se guardara el documento
     * @param {string} base64 Texto que contiene el base64 de la imagen
     * @param {Function} cb Callback de retorno
     */
    uploadImageBase64: (study, path, base64, cb) => {
        base64 = base64.replace(/^data:image\/png;base64,/, '');
        const body = {
            study,
            path,
            base64
        };
        $.ajax({
            type: 'POST',
            url: '/api/uploads/base64',
            data: body,
            dataType: 'json',
            success: function(response) {
                if (cb) {
                    cb(response);
                }
            }
        });
    },
    openLoadingModal() {
        document.getElementById('divLoading').style.display = 'block';
    },
    closeLoadingModal() {
        document.getElementById('divLoading').style.display = 'none';
    },
    loadNotifications() {
        this.getNotifications(globalCredentials.pk, function(notifications) {
            notifications.forEach(notification => {
                console.log({ notification });
            });
        });
    },
    getNotifications(userPk, cb) {
        $.ajax({
            type: 'GET',
            url: '/api/notifications_users/',
            data: { userPk },
            dataType: 'json',
            success: function(response) {
                cb(response);
            }
        });
    },
    openModalPassword() {
        pk = globalCredentials.pk;
        var Password = new PasswordModule({ pk, zindex: 4444 });
        Password.on('save', function(data) {});
    },
    generateToken(obj, cb) {
        var obj = { obj };
        $.ajax({
            type: 'POST',
            url: '/api/helpers/token/',
            data: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success: function(token) {
                if (cb) {
                    cb(token);
                }
            }

        });
    }
};
