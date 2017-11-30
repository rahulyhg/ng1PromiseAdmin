/**
 * Created by mr.whg on 2017/6/19.
 */
'use strict';

/* Controllers */
app.controller('eleCtrl', ['$scope', '$http', '$localStorage', 'flowService', function ($scope, $http, $localStorage, flowService) {
    /**
     * controller start*/


    $scope.inputsText = [{
        type: 'text',
        required: true,
        checked: '',
        disabled: 'disabled',
        maxLength: 8,
        placeholder: '这是一个长度为8的输入框',
        value: '',
        ngModel: 'textBind'
    }, {
        type: 'text',
        required: false,
        disabled: '',
        maxLength: 8,
        placeholder: '这是一个长度为8的输入框,这两个不是必填',
        value: '',
        ngModel: 'textBind2'
    }]
    $scope.inputsRadio = [{
        type: 'radio',
        required: true,
        checked: '',
        disabled: '',
        name: 'sex',
        value: '1',
        tipValue: '男',
        ngModel: 'sexValue'
    }, {
        type: 'radio',
        required: true,
        checked: '',
        disabled: '',
        name: 'sex',
        value: '2',
        tipValue: '女',
        ngModel: 'sexValue'
    }, {
        type: 'radio',
        required: true,
        checked: '',
        disabled: '',
        name: 'sex',
        value: '0',
        tipValue: '不告诉你',
        ngModel: 'sexValue'
    }]


    function inputSelector(element) {
        if (element.checked) {
            return {
                name: element.name,
                value: element.value
            }
        }
        ;
    }

    function getInputValue(element) {
        switch (element.type.toLowerCase()) {
            case 'submit':
            case 'hidden':
            case 'password':
            case 'text':
                return {
                    name: element.name,
                    value: element.value
                };
            case 'checkbox':
            case 'radio':
                return inputSelector(element);
        }
        return false;
    }

    $scope.console = function () {
        var arr = [];
        var oInput = $('input');
        for (var i = 0; i < oInput.length; i++) {
            if (getInputValue(oInput[i])) {
                arr.push(getInputValue(oInput[i]));
            }

        }
        console.log(arr);
    }

    /**
     * controller end*/
}]);