/**
 * Created by mr.whg on 2017/6/16.
 */
'use strict';
angular.module('MyService', [])
    .factory('flowService', ['$document', '$q', '$timeout', '$http', '$state', function ($document, $q, $timeout, $http, $state) {
        return{
            createApplyDetail:function(params){
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http({
                    url:'./do/createApplyDetail.php',
                    method: 'get',
                    params:params
                }).success(function (result) {
                    deferred.resolve(result);
                }).error(function (error) {
                    deferred.reject(error);
                });
                return promise;
            },
            getApplyDetail:function(params){
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http({
                    url:'./do/getApplyDetail.php',
                    method: 'get',
                    params:params
                }).success(function (result) {
                    deferred.resolve(result);
                }).error(function (error) {
                    deferred.reject(error);
                });
                return promise;
            },
            getUser:function(params){
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http({
                    url:'./do/getUser.php',
                    method: 'get',
                    params:params
                }).success(function (result) {
                    deferred.resolve(result);
                }).error(function (error) {
                    deferred.reject(error);
                });
                return promise;
            },
            setApprovalProcess:function(params){
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http({
                    url:'./do/setApprovalProcess.php',
                    method: 'get',
                    params:params
                }).success(function (result) {
                    deferred.resolve(result);
                }).error(function (error) {
                    deferred.reject(error);
                });
                return promise;
            },
            getApprovalProcess:function(params){
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http({
                    url:'./do/getApprovalProcess.php',
                    method: 'get',
                    params:params
                }).success(function (result) {
                    deferred.resolve(result);
                }).error(function (error) {
                    deferred.reject(error);
                });
                return promise;
            }
        }
    }]);