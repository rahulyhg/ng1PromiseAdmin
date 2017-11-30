/**
 * Created by mr.whg on 2017/6/16.
 */
'use strict';

/* Controllers */
app.controller('newModelCtrl', ['$scope', '$http', '$localStorage', 'flowService', function ($scope, $http, $localStorage, flowService) {

    $scope.newModelTitle = '新模型开启';

    /**
     * 请求例子
     * */
    //$scope.tttr=function(){
    //    flowService.createApplyDetail({APPLY:'测试一下这个写法。'}).then(function(res){
    //        console.log(res)
    //    })
    //}
    /**
     * 获取所有的用户信息
     * */
    flowService.getUser('').then(function (res) {
        $scope.users = res.data;
    })
    if ($localStorage.userInfo) {
        $scope.userInfo = $localStorage.userInfo;
    }
    /**
     * 获取所有的申请想请
     * */
    $scope.getApplyDetail = function () {
        flowService.getApplyDetail('').then(function (res) {
            $scope.applyDetail = res.data;
            console.log(res)
        })
    }
    /**
     * 设置角色
     * */
    $scope.setUser = function (e, name) {
        $scope.userInfo = '';
        angular.forEach($scope.users, function (every, index) {
            if ($scope.users[index].name == name) {
                var userInfo = $scope.users[index];
                $scope.userInfo = userInfo;
                $localStorage.userInfo = $scope.userInfo;
                $(e.target).siblings().css({color: ''})
                $(e.target).css({color: '#f60'})
            }
        });
    }
    /**
     * 删除角色
     * */
    $scope.deleteUser = function (e) {
        $localStorage.userInfo = '';
        $scope.userInfo = $localStorage.userInfo;
        $(e.target).siblings().css({color: ''})
    }
    /**
     * 从后台读取审批流程方式
     * */
    flowService.getApprovalProcess('').then(function (res) {
        $scope.approvalProcessType = res.type;
    })
    /**
     * 切换审批流程类型
     * */
    $scope.toggleApprovalProcessType = function (e, type) {
        if (type === 'custom') {
            $scope.approvalProcessType = 'custom';
        } else if (type === 'free') {
            $scope.approvalProcessType = 'free';
            flowService.setApprovalProcess({
                params: {
                    type: 'free',
                    value:''
                }
            }).then(function (res) {
                console.log(res)
            })
        }
    }
    /**
     * 设置自定义审批流程
     * */
    Array.prototype.unique = function () {
        var res = [];
        var json = {};
        for (var i = 0; i < this.length; i++) {
            if (!json[this[i]]) {
                res.push(this[i]);
                json[this[i]] = 1;
            }
        }
        return res;
    }
    $scope.approvalArr = [];
    $scope.approvalNameArr = [];
    $scope.setApproval = function (e) {
        var approvalName = $(e.target).text();
        if ($scope.approvalNameArr.length > 1) {
            for (var i = 0; i < $scope.approvalNameArr.length; i++) {
                if ($scope.approvalNameArr[i] == approvalName) {
                    alert('不能重复添加。')
                }
            }
        }
        angular.forEach($scope.users, function (every, index) {
            if ($scope.users[index].name == approvalName) {
                $scope.approvalArr.push($scope.users[index].workNo);
                $scope.approvalNameArr.push($scope.users[index].name);
            }
        });
        $scope.approvalArr = $scope.approvalArr.unique();
        $scope.approvalNameArr = $scope.approvalNameArr.unique();
        //console.log($scope.approvalArr)
        //console.log($scope.approvalNameArr)

    }
    $scope.deleteApproval = function (e) {
        var approvalName = $(e.target).text();
        for (var i = 0; i < $scope.approvalNameArr.length; i++) {
            if ($scope.approvalNameArr[i] == approvalName) {
                console.log($scope.approvalNameArr.length)
                $scope.approvalArr.splice(i, 1);
                $scope.approvalNameArr.splice(i, 1);
            }
        }
    }
    $scope.setApprovalProcess=function(e){
        flowService.setApprovalProcess({
            params: {
                type: 'custom',
                value:$scope.approvalArr
            }
        }).then(function (res) {
            console.log(res)
        })
    }
    /**
     * 填写我的申请表
     * */
    $scope.showMyApply=function(){
        $scope.showMyApplyTable=true;
        flowService.getApprovalProcess('').then(function (res) {
            console.log(res);
            $scope.applyApprovalProgress=res.type;
            $scope.applyApprovalProgressContent=res.value;
        })
    }
}]);
