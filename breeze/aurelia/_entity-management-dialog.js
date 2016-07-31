'use strict';

// Use aurelia-dialog
export default class <%= entityClass %>Dialog {

    timeout(function (){
        $.element('.form-group:eq(1)>input').focus();
    });

    function clear () {
        $uibModalInstance.dismiss('cancel');
    }

    function save () {
        this.isSaving = true;
        if (this.<%= entityInstance %>.id !== null) {
            <%= entityClass %>.update(this.<%= entityInstance %>, this.onSaveSuccess, this.onSaveError);
        } else {
            <%= entityClass %>.save(this.<%= entityInstance %>, this.onSaveSuccess, this.onSaveError);
        }
    }

    function onSaveSuccess (result) {
        this.emit('<%= clientAppName %>:<%= entityInstance %>Update', result);
        modalInstance.close(result);
        this.isSaving = false;
    }

    function onSaveError () {
        this.isSaving = false;
    }
}
