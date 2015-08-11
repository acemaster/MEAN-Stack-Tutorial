var app = angular.module('VivekNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  $scope.posts=[
  {title: 'post 1', link: "#", upvotes: 3},
  {title: 'post 2', link: "#", upvotes: 2},
  {title: 'post 3', link: "#", upvotes: 1},
  {title: 'post 4', link: "#", upvotes: 4},
  {title: 'post 5', link: "#", upvotes: 2}
];

$scope.addpost= function(){
	if($scope.title || $scope.title!='')
		$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
	$scope.title="";
	$scope.link="";
}
$scope.upvote=function(post){
	post.upvotes+=1;
}
}]);