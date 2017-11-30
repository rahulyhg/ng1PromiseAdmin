/**
 * Created by mr.whg on 2017/6/13.
 */
'use strict';

/* Controllers */
app.controller('flowCtrl', ['$scope', '$http', '$localStorage','flowService', function ($scope, $http, $localStorage,flowService) {



    //读取系统设定信息
    $scope.departments = departments;
    $scope.positions = positions;
    $scope.systemPermissions = systemPermissions;
    $scope.users = users;

    //设定职位权限设定
    //设定职位
    //设定权限
    $scope.systemPermissionSelectedArr = [];
    function removeByValue(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    }

    $scope.systemPermissionSelected = function (e, systemPermissionId) {
        if (e.target.checked) {
            $scope.systemPermissionSelectedArr.push(systemPermissionId);
        } else {
            removeByValue($scope.systemPermissionSelectedArr, systemPermissionId)
        }
        //console.log($scope.systemPermissionSelectedArr);
    }
    //提交职位权限设定
    $scope.up = function () {
        //console.log($scope.department);
        //console.log($scope.position);
        //console.log($scope.systemPermissionSelectedArr);

        if ($scope.position) {
            console.log($scope.position)
            angular.forEach($scope.positions, function (every, index) {
                if (positions[index].pid == $scope.position.pid) {
                    positions[index].permission = $scope.systemPermissionSelectedArr;
                    //console.log(positions[index].permission)
                }
            });

            //var positionPermission = {};
            //positionPermission.positionId = $scope.position.pid;
            //positionPermission.positionName = $scope.position.name;
            //positionPermission.permission = $scope.systemPermissionSelectedArr;
            //console.log(positionPermission);
        } else {
            alert('请先选择职位再再设置权限');
        }

    };
    //先从本地读取用户信息以及系统配置
    if (!$localStorage.userInfo) {
        $scope.userLogined = false;
    } else {
        $scope.userLogined = true;
        $scope.userInfo = $localStorage.userInfo;
    }

    $scope.setUser = function (name) {
        $scope.userInfo = '';
        angular.forEach(users, function (every, index) {
            if (users[index].userName == name) {
                //取得用户信息
                var userInfo = users[index];
                //写入用户信息
                $scope.userInfo = userInfo;
                $localStorage.userInfo = $scope.userInfo;
                $scope.userLogined = true;
            }
        });
    }
    $scope.deleteUser = function () {
        $localStorage.userInfo = '';
        $scope.userInfo = $localStorage.userInfo;
        $scope.userLogined = false;
    }
    //二级联动
    $scope.subSelect = function () {
        $scope.subPositions = [];
        angular.forEach($scope.positions, function (every, index) {
            for (var i = 0; i < $scope.department.position.length; i++) {
                if (positions[index].pid == $scope.department.position[i]) {
                    //positions[index].permission = $scope.systemPermissionSelectedArr;
                    $scope.subPositions.push(positions[index]);
                }
            }

        });
    }
    //三级联动
    $scope.subPosition = function () {
        $scope.subPositions = [];
        angular.forEach($scope.positions, function (every, index) {
            for (var i = 0; i < $scope.department.position.length; i++) {
                if (positions[index].pid == $scope.department.position[i]) {
                    //positions[index].permission = $scope.systemPermissionSelectedArr;
                    $scope.subPositions.push(positions[index]);
                }
            }

        });
    }
    $scope.subApprover = function () {

        angular.forEach($scope.users, function (every, index) {
            $scope.subUsers = [];
            //console.log($scope.users[index].job);
            for (var i = 0; i < $scope.users[index].job.length; i++) {
                if ($scope.users[index].job[i].position == $scope.position.pid) {
                    //positions[index].permission = $scope.systemPermissionSelectedArr;
                    // $scope.subPositions.push(positions[index]) ;
                    //console.log($scope.users[index]);
                    $scope.subUsers.push($scope.users[index]);
                }
            }
        });
    }


    $scope.apply = function () {
        var applyContent = {},
            arr = $localStorage.applyContent;
        applyContent.applyTime = (new Date()).getTime();
        applyContent.applyUserInfo = $scope.userInfo;
        applyContent.applyType = $scope.applyType == undefined ? '' : $scope.applyType;
        applyContent.applyDays = $scope.applyDays;
        applyContent.applyReason = $scope.applyReason;
        applyContent.applyToDepartment = $scope.department;
        applyContent.applyToPosition = $scope.position;
        applyContent.applyToUser = $scope.subUser;
        applyContent.approveProgress = {};
        //applyContent.approveProgress.status
        //0为驳回，1为移交上级，3为申请通过
        applyContent.approveProgress.status = 0;
        //console.log(applyContent);
        //console.log($localStorage.applyContent);
        if(applyContent.applyType && applyContent.applyDays && applyContent.applyReason && applyContent.applyToUser){
            arr.push(applyContent);
        }else{
            alert('表格不完整.')
        }
        //存储申请表到本地【服务器】。
        $localStorage.applyContent=arr;
    }
    $scope.myApply = function () {
        //从本地【服务器】读取我的信息
        var myInfo = $localStorage.userInfo;
        //从本地【服务器】读取我的申请
        var arr = [];
        var applyContent = $localStorage.applyContent;
        angular.forEach(applyContent, function (every, index) {
            if (myInfo.userId == applyContent[index].applyUserInfo.userId) {
                arr.push(applyContent[index]);
            }
        })
        $scope.myApplyContents = arr;
        console.log($scope.myApplyContents)
    }
    $scope.myApprove = function () {
        //从本地【服务器】读取我的信息
        var myInfo = $localStorage.userInfo;
        //从本地【服务器】读取我的申请
        var arr = [];
        var myApproveContents = $localStorage.applyContent;
        angular.forEach(myApproveContents, function (every, index) {
            if (myInfo.userId == myApproveContents[index].applyToUser.userId) {
                arr.push(myApproveContents[index]);
            }
        })
        $scope.myApproveContents = arr;
        console.log($scope.myApproveContents)
    }
    $scope.myApproveSubmit = function () {

    }

}])
;