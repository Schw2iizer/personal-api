var app = angular.module("Personal");

app.service("mainService", function($http, $q){

	this.getName = function(){
		var deferred = $q.defer();
		$http({
			method: "GET",
			url: "http://localhost/9111/api/name"
		}).then(function(res){
			console.log(res);
			deferred.resolve(res);
		}), function(err){
			deferred.reject(err)
		}
			
		return deferred.promise

	}

})