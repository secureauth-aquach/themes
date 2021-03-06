'use strict';

angular.module('secureauth')
  .directive('manageAcctPin', function (config, manageAccount) {

    var manageAcctPinController = function () {
      var vm = this;

      angular.extend(vm, {
        newPin: manageAccount.getNewPin()[0],
        confirmPin: manageAccount.getConfirmPin()[0],
        acctPassMsg: manageAccount.getAcctPassMsg()[0],
        acctPinCloseBtn: manageAccount.getAcctPinCloseBtn()[0],
        acctPinResetBtn: manageAccount.getAcctPinResetBtn()[0],
        pinErrorText: manageAccount.getPinErrorText()[0],
        pinValidationMsg: manageAccount.getPinValidationMsg()[0],
        focus: false,
        onChange: function (id) {
          var passVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(passVal);
        },
        resetPin: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        },
        closeModal: function () {
          var button = angular.element('#ContentPlaceHolder1_CancelResetPINModalButton');
          vm.focus = false;
          button.trigger('click');
        },
        showModal: function () {
          var modal = angular.element('#ContentPlaceHolder1_ResetPINModal_backgroundElement');
          var modalVisible = modal.css('display');
          if (modalVisible !== 'none' && modal.length > 0) {
            modal.parent().addClass('ng-cloak');
            angular.element('#resetPin').modal();
            vm.focus = true;
          }
        },
        init: function () {
          vm.showModal();
        }
      });

      vm.init();
    };

    return {
      restrict: 'EA',
      controller: manageAcctPinController,
      controllerAs: 'ManageAcctPin',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctPin/manageAcctPin.html',
      bindToController: true
    };
  });
